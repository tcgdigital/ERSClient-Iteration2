import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ToastrService, ToastrConfig } from 'ngx-toastr';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { InvolvePartyModel } from '../../../shared.components';
import { AffectedPeopleToView, AffectedPeopleModel } from './affected.people.model';
import { AffectedPeopleService } from './affected.people.service';
import {
    ResponseModel, DataExchangeService,
    GlobalStateService, UtilityService, KeyValue, AuthModel, GlobalConstants
} from '../../../../shared';
import { InvolvePartyService } from '../../involveparties';

@Component({
    selector: 'affectedpeople-verify',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../views/affected.people.verification.html'
})
export class AffectedPeopleVerificationComponent implements OnInit {

    public isShowVerifyAffectedPeople: boolean = true;
    public currentDepartmentId: number = 0;
    protected _onRouteChange: Subscription;
    affectedPeopleForVerification: AffectedPeopleToView[] = [];
    verifiedAffectedPeople: AffectedPeopleModel[];
    date: Date = new Date();
    currentIncident: number;
    isArchive: boolean = false;
    allSelectVerify: boolean;
    userid: number;
    credential: AuthModel;
    downloadPath: string;
    downloadURL: string;

    constructor(private affectedPeopleService: AffectedPeopleService,
        private involvedPartyService: InvolvePartyService,
        private globalState: GlobalStateService,
        private toastrService: ToastrService,
        private toastrConfig: ToastrConfig,
        private _router: Router) { }

    getAffectedPeople(currentIncident): void {
        this.involvedPartyService.GetFilterByIncidentId(currentIncident)
            .subscribe((response: ResponseModel<InvolvePartyModel>) => {
                this.affectedPeopleForVerification = this.affectedPeopleService.FlattenAffectedPeople(response.Records[0])
                    .sort((a, b) => {
                        if (x => x.PassengerType) {
                            if (a.PassengerName < b.PassengerName) return -1;
                            if (a.PassengerName > b.PassengerName) return 1;
                            if (a.CrewName < b.CrewName) return -1;
                            if (a.CrewName > b.CrewName) return 1;
                            return 0;
                        }
                    });
                this.isVerfiedChange();
            }, (error: any) => {
                console.log(`Error: ${error}`);
            });
    }

    saveVerifiedAffectedPeople(): void {
        const datenow = this.date;
        this.verifiedAffectedPeople = this.affectedPeopleService.MapAffectedPeople(this.affectedPeopleForVerification, this.userid);
        this.affectedPeopleService.CreateBulk(this.verifiedAffectedPeople)
            .subscribe((response: AffectedPeopleModel[]) => {
                this.toastrService.success('Selected People directly affected are verified.', 'Success', this.toastrConfig);
                this.getAffectedPeople(this.currentIncident);

            }, (error: any) => {
                alert(error);
            });
    }

    selectAllVerify(value: any): void {
        this.affectedPeopleForVerification.forEach((x: AffectedPeopleToView) => {
            x.IsVerified = value.checked;
        });
    }

    isValidView(item: AffectedPeopleToView) {
        return (item.IsVerified == true);
    }

    isVerfiedChange(): void {
        this.allSelectVerify = this.affectedPeopleForVerification.length != 0
            && this.affectedPeopleForVerification.filter((x) => {
                return x.IsVerified == true;
            }).length == this.affectedPeopleForVerification.length;
    }

    incidentChangeHandler(incident: KeyValue) {
        this.currentIncident = incident.Value;
        this.downloadPath = GlobalConstants.EXTERNAL_URL + 'api/Report/PDAVerifiedManifest/' + this.currentIncident;
        this.downloadURL = GlobalConstants.EXTERNAL_URL + 'api/Report/CrewVerifiedManifest' + this.currentIncident;
        this.getAffectedPeople(this.currentIncident);
    }

    ngOnInit(): any {
        this.allSelectVerify = false;
        this.currentDepartmentId = +UtilityService.GetFromSession('CurrentDepartmentId');
        this.globalState.Subscribe('departmentChangeFromDashboard', (model: KeyValue) => this.departmentChangeHandler(model));

        if (this._router.url.indexOf('archivedashboard') > -1) {
            this.isArchive = true;
            this.currentIncident = +UtilityService.GetFromSession('ArchieveIncidentId');

        }
        else {
            this.isArchive = false;
            this.currentIncident = +UtilityService.GetFromSession('CurrentIncidentId');
        }
        this.getAffectedPeople(this.currentIncident);
        this.downloadPath = GlobalConstants.EXTERNAL_URL + 'api/Report/PDAVerifiedManifest/' + this.currentIncident;
        this.downloadURL = GlobalConstants.EXTERNAL_URL + 'api/Report/CrewVerifiedManifest/' + this.currentIncident;
        this.credential = UtilityService.getCredentialDetails();
        this.userid = +this.credential.UserId;
        this.globalState.Subscribe('incidentChangefromDashboard', (model: KeyValue) => this.incidentChangeHandler(model));

        // Signal Notification
        this.globalState.Subscribe('ReceiveIncidentBorrowingCompletionResponse', () => {
            this.getAffectedPeople(this.currentIncident);
        });
        this.globalState.Subscribe('ReceivePassengerImportCompletionResponse', (count: number) => {
            if (count > 0)
                this.getAffectedPeople(this.currentIncident);
        });
    }

    ngOnDestroy(): void {
       // this.globalState.Unsubscribe('incidentChangefromDashboard');
    }

    departmentChangeHandler(department: KeyValue): void {
        this.currentDepartmentId = department.Value;
    }
}