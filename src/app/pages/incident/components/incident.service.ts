import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { IncidentModel } from './incident.model';
import { IIncidentService } from './IIncidentService';
import {
    ResponseModel, DataService,
    DataServiceFactory, DataProcessingService, ServiceBase
} from '../../../shared';
import { DepartmentService, EmergencyTypeService } from '../../masterdata';
import {
    FlightModel, FlightService, InvolvePartyModel
} from '../../shared.components';
import { AffectedModel } from "../../shared.components/affected/components/affected.model";

@Injectable()
export class IncidentService extends ServiceBase<IncidentModel> implements IIncidentService {
    private _involvePartyDataService: DataService<InvolvePartyModel>;
    private _affectedDataService: DataService<AffectedModel>;

    /**
     * Creates an instance of IncidentService.
     * @param {DataServiceFactory} dataServiceFactory
     * @param {DepartmentService} departmentService
     * @param {FlightService} flightService
     * @param {EmergencyTypeService} emergencyTypeService
     *
     * @memberof IncidentService
     */
    constructor(private dataServiceFactory: DataServiceFactory,
        private departmentService: DepartmentService,
        private flightService: FlightService,
        private emergencyTypeService: EmergencyTypeService) {
        super(dataServiceFactory, 'Incidents');
        const option: DataProcessingService = new DataProcessingService();
        this._involvePartyDataService = dataServiceFactory
            .CreateServiceWithOptions<InvolvePartyModel>('InvolvedParties', option);

        this._affectedDataService = dataServiceFactory
            .CreateServiceWithOptions<AffectedModel>('Affecteds', option);
    }

    GetAll(): Observable<ResponseModel<IncidentModel>> {
        return this._dataService.Query()
            .Expand('ParentCheckList($select=CheckListId,CheckListCode)',
            'TargetDepartment($select=DepartmentId,DepartmentName)',
            'EmergencyType($select=EmergencyTypeId,EmergencyTypeName)',
            'Organization($select=OrganizationId,OrganizationCode,OrganizationName)')
            .OrderBy('CreatedOn desc')
            .Execute();
    }

    GetAdditionalInfoByIncident(incidentId: number): Observable<ResponseModel<IncidentModel>> {
        return this._dataService.Query()
            .Filter(`IncidentId eq ${incidentId}`)
            .Select('IncidentId,EmergencyLocation,WhereHappend')
            .Expand('EmergencyType($select=EmergencyCategory),InvolvedParties($expand=Flights($select=FlightNo,FlightTaleNumber,OriginCode,DestinationCode,DepartureDate,ArrivalDate))')
            .OrderBy('CreatedOn desc')
            .Execute();
    }

    GetAllActiveIncidents(): Observable<ResponseModel<IncidentModel>> {
        return this._dataService.Query()
            .Expand(`Organization($select=OrganizationId,OrganizationCode,OrganizationName)`)
            .Filter("ActiveFlag eq 'Active' and ClosedBy eq null and ClosedOn eq null and IncidentId ne 0")
            .OrderBy('CreatedOn desc')
            .Execute();
    }

    GetOpenIncidents(): Observable<ResponseModel<IncidentModel>> {
        return this._dataService.Query()
            .Filter("ClosedBy eq null and ClosedOn eq null and IncidentId ne 0")
            .Execute();
    }

    IsAnyOpenIncidents(): Observable<boolean> {
        return this._dataService.Count()
            .Filter("ClosedBy eq null and ClosedOn eq null and IncidentId ne 0")
            .Execute().map((x) => x > 0);
    }

    Get(id: string | number): Observable<IncidentModel> {
        return this._dataService.Get(id.toString()).Execute();
    }

    /**
     * Create Incident for both
     * NonFlightRelated(With Dummy Flight Object) & FlightRelated Emergency
     * @param {IncidentModel} incidentModel 
     * @param {boolean} isFlightRelated 
     * @param {InvolvePartyModel} [involvedParty] 
     * @param {FlightModel} [flight] 
     * @param {AffectedModel} [affected] 
     * @returns {Observable<IncidentModel>} 
     * 
     * @memberOf IncidentService
     */
    CreateIncident(incidentModel: IncidentModel, isFlightRelated: boolean, involvedParty?: InvolvePartyModel,
        flight?: FlightModel, affected?: AffectedModel): Observable<IncidentModel> {
        let incident: IncidentModel;
        involvedParty.Affecteds = [];
        delete affected.Active;
        involvedParty.Affecteds.push(affected);
        involvedParty.Flights = [];
        involvedParty.Flights.push(flight);
        incidentModel.InvolvedParties = [];
        incidentModel.InvolvedParties.push(involvedParty);
        return this._dataService.Post(incidentModel)
            .Execute()
            .map((data: IncidentModel) => {
                incident = data;
                involvedParty.IncidentId = incident.IncidentId;
                return data;
            });
    }

    GetIncidentById(id: number): Observable<IncidentModel> {
        return this._dataService.Get(id.toString())
            .Execute();
    }

    GetIncidentByIncidentId(incidentId: number): Observable<IncidentModel> {
        return this._dataService.Query()
            .Filter(`IncidentId eq ${incidentId}`)
            .Expand('InvolvedParties($expand=Flights)')
            .Execute()
            .map(x => x.Records[0]);
    }

    CreateInvolveParty(entity: InvolvePartyModel): Observable<InvolvePartyModel> {
        let involvedParty: InvolvePartyModel;
        return this._involvePartyDataService.Post(entity)
            .Execute()
            .map((data: InvolvePartyModel) => {
                involvedParty = data;
                return data;
            })
            .flatMap((data: InvolvePartyModel) =>
                this.GetIncidentById(data.IncidentId)
            )
            .map((data: IncidentModel) => {
                involvedParty.Incident = data;
                return involvedParty;
            });
    }


    CreateAffected(entity: AffectedModel): Observable<AffectedModel> {
        let affected: AffectedModel;
        delete entity.Active;
        return this._affectedDataService.Post(entity)
            .Execute()
            .map((data: AffectedModel) => {
                affected = data;
                affected.Active = (affected.ActiveFlag == 'Active');
                return data;
            });
    }

    GetLastConfiguredCountIncidents(): Observable<ResponseModel<IncidentModel>> {
        return this._dataService.Query()
            .Filter('IncidentId ne 0')
            .OrderBy('IncidentId asc')
            .Expand('InvolvedParties')
            .Execute();
    }

    GetFlightInfoFromIncident(incidentId: number): Observable<FlightModel> {
        return this._dataService.Query()
            .Filter(`IncidentId eq ${incidentId}`)
            .Expand('InvolvedParties($expand=Flights)')
            .Execute()
            .map((item: ResponseModel<IncidentModel>) => {
                if (item.Count > 0) {
                    if (item.Records[0].InvolvedParties.length > 0) {
                        if (item.Records[0].InvolvedParties[0].Flights.length > 0) {
                            return item.Records[0].InvolvedParties[0].Flights[0];
                        }
                    }
                }
            });
    }
}