import {
    Component, ViewEncapsulation,
    OnInit, OnDestroy, ViewChild
} from '@angular/core';
import {
    ResponseModel, GlobalConstants, KeyValue,
    GlobalStateService, UtilityService
} from '../../../../shared';
import { Observable, Subscription } from 'rxjs/Rx';

import {
    CallCenterOnlyPageService,
    ExternalInputModel
} from '../../../callcenteronlypage/component';
import { Router, NavigationEnd } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { InvolvePartyService } from '../../involveparties';
import { InvolvePartyModel,
    AffectedPeopleService, AffectedPeopleToView
} from '../../../shared.components';

@Component({
    selector: 'passengerquery-assignedcalls',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../views/passanger.query.recievedcallslist.view.html',
    providers: [InvolvePartyService, AffectedPeopleService]
})
export class PassangerQueryRecievedCallsListComponent implements OnInit {
    @ViewChild('childModalcallcenter') public childModalcallcenter: ModalDirective;
    @ViewChild('childModaldemand') public childModaldemand: ModalDirective;

    allAssignedCalls: ExternalInputModel[] = [];
    currentIncidentId: number;
    protected _onRouteChange: Subscription;
    callId: number;
    callcenterload: boolean = false;
    public isArchive: boolean = false;
    affectedPeople: AffectedPeopleToView[];
    passengers: KeyValue[] = [];

    constructor(private callcenteronlypageservice: CallCenterOnlyPageService,
        private involvedPartyService: InvolvePartyService,
        private affectedPeopleService: AffectedPeopleService,
        private _router: Router,
        private globalState: GlobalStateService) {
    }

    ngOnInit() {
        if (this._router.url.indexOf('archivedashboard') > -1) {
            this.isArchive = true;
            this.currentIncidentId = +UtilityService.GetFromSession('ArchieveIncidentId');
        }
        else {
            this.isArchive = false;
            this.currentIncidentId = +UtilityService.GetFromSession('CurrentIncidentId');
        }

        this.getPassengersCrews();
        // this.getAllPassengerQueryCallsRecieved(this.currentIncidentId);
        this.globalState.Subscribe('incidentChangefromDashboard', (model: KeyValue) => this.incidentChangeHandler(model));
        this.globalState.Subscribe('CallRecieved', (model: number) => this.getAllPassengerQueryCallsRecieved(this.currentIncidentId));

        // SignalR Notification
        this.globalState.Subscribe('AssignedPassangerEnquiryCreationResponse', (model: ExternalInputModel) => {
            // this.getAllPassengerQueryCallsRecieved(model.IncidentId);
            const index: number = this.allAssignedCalls
                .findIndex((x: ExternalInputModel) => x.ExternalInputId === model.ExternalInputId);

            if (index > -1) {
                this.allAssignedCalls.splice(index, 1, model);
            } else {
                this.allAssignedCalls.unshift(model)
            }
        });
        /*
        this.globalState.Subscribe('closePDAEnqReceived', (model: string) => {
            this.cancelCallcenter();
        });
        */
    }

    incidentChangeHandler(incident: KeyValue): void {
        this.currentIncidentId = incident.Value;
        this.getAllPassengerQueryCallsRecieved(this.currentIncidentId);
    }

    getAllPassengerQueryCallsRecieved(incidentId): void {
        this.childModalcallcenter.hide();
        this.callcenterload = false;
        this.callcenteronlypageservice.GetPassengerQueryCallsRecievedByIncident(incidentId)
            .subscribe((response: ResponseModel<ExternalInputModel>) => {
                this.allAssignedCalls = response.Records;
            });
    }

    openCallcenter(externalInputId): void {
        this.callId = externalInputId;
        this.callcenterload = true;
        this.childModalcallcenter.show();
    }

    cancelCallcenter(): void {
        this.callcenterload = false;
        this.childModalcallcenter.hide();
    }

    getPassengersCrews(): void {
        this.involvedPartyService.GetFilterByIncidentId(this.currentIncidentId)
            .subscribe((response: ResponseModel<InvolvePartyModel>) => {
                this.affectedPeople = this.affectedPeopleService.FlattenAffectedPeople(response.Records[0]);
                const passengerModels = this.affectedPeople.filter(x => x.IsCrew === false);
                for (const affectedPerson of passengerModels) {
                    this.passengers.push(new KeyValue((affectedPerson.PassengerName || affectedPerson.CrewName), affectedPerson.AffectedPersonId));
                }

                this.getAllPassengerQueryCallsRecieved(this.currentIncidentId);
            }, (error: any) => {
                console.log(`Error: ${error}`);
            });
    }

    getPDAName(AffectedPersonId): string {
        let Nm: string = "";
        Nm = this.passengers.find(x => x.Value == AffectedPersonId).Key;
        return Nm;
    }

}

