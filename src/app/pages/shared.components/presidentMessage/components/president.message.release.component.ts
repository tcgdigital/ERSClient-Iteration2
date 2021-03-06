import { Component, ViewEncapsulation } from '@angular/core';
import { PresidentMessageModel } from './presidentMessage.model';
import { UtilityService } from '../../../../shared/services';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
    selector: 'presidentMessage-release-main',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../views/president.message.release.view.html'
})
export class PresidentMessageReleaseComponent {

    evtPresidentMessage: PresidentMessageModel;
    initiatedDepartment: number;
    incidentId: number;
    isArchive: boolean = false;
    protected _onRouteChange: Subscription;

    constructor(private _router: Router) { }

    ngOnInit(): any {
        this.incidentId = +UtilityService.GetFromSession('CurrentIncidentId');
        this.initiatedDepartment = +UtilityService.GetFromSession('CurrentDepartmentId');
        if (this._router.url.indexOf('archivedashboard') > -1) {
            this.isArchive = true;
            this.incidentId = +UtilityService.GetFromSession('ArchieveIncidentId');
        }
        else {
            this.isArchive = false;
            this.incidentId = +UtilityService.GetFromSession('CurrentIncidentId');
        }
    }
}