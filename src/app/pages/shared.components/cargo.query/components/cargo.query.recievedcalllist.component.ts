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

@Component({
    selector: 'cargoquery-assignedcalls',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../views/cargo.query.assignedcallslist.view.html'
})
export class CargoQueryRecievedCallsListComponent implements OnInit {
    @ViewChild('childModalcallcenter') public childModalcallcenter: ModalDirective;

    allAssignedCalls: ExternalInputModel[] = [];
    currentIncidentId: number;
    protected _onRouteChange: Subscription;
    callId: number;
    callcenterload: boolean = false;
    public isArchive: boolean = false;

    constructor(private callcenteronlypageservice: CallCenterOnlyPageService,
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

        this.getAllCargoQueryCallsRecieved(this.currentIncidentId);
        this.globalState.Subscribe('incidentChangefromDashboard', (model: KeyValue) => this.incidentChangeHandler(model));
        this.globalState.Subscribe('CallRecieved', (model: number) => this.getAllCargoQueryCallsRecieved(this.currentIncidentId));

        // SignalR Notification
        this.globalState.Subscribe('AssignedCargoEnquiryCreationResponse', (model: ExternalInputModel) => {
            this.getAllCargoQueryCallsRecieved(model.IncidentId);
        });
    }

    incidentChangeHandler(incident: KeyValue): void {
        this.currentIncidentId = incident.Value;
        this.getAllCargoQueryCallsRecieved(this.currentIncidentId);
    }

    getAllCargoQueryCallsRecieved(incidentId): void {
        this.childModalcallcenter.hide();
        this.callcenterload = false;
        this.callcenteronlypageservice.GetCargoQueryCallsRecievedByIncident(incidentId)
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
}

