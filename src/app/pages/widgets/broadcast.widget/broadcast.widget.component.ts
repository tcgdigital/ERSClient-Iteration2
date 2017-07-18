import {
    Component, OnInit, Input, OnDestroy,
    ViewEncapsulation, ViewChild
} from '@angular/core';
import { Observable } from 'rxjs/Rx';

import {
    DataServiceFactory, DataExchangeService,
    UtilityService, GlobalConstants,
    TextAccordionModel, GlobalStateService, KeyValue
} from '../../../shared';
import { BroadcastWidgetModel } from './broadcast.widget.model';
import { BroadCastModel } from '../../shared.components';
import { BroadcastWidgetService } from './broadcast.widget.service';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
    selector: 'broadcast-widget',
    templateUrl: './broadcast.widget.view.html',
    styleUrls: ['./broadcast.widget.style.scss'],
    encapsulation: ViewEncapsulation.None
})
export class BroadcastWidgetComponent implements OnInit, OnDestroy {
    @Input('initiatedDepartmentId') initiatedDepartmentId: number;
    @Input('currentIncidentId') incidentId: number;
    @ViewChild('childModal') public childModal: ModalDirective;

    LatestBroadcasts: Observable<TextAccordionModel[]>;
    AllPublishedBroadcasts: BroadcastWidgetModel[]= new Array<BroadcastWidgetModel>();
    LatestBroadcastModels: BroadcastWidgetModel[] = new Array<BroadcastWidgetModel>();

    isHidden: boolean = true;
    currentIncidentId: number;
    currentDepartmentId: number;
    public isShow: boolean = true;
    public isShowViewAll: boolean = true;
    public accessibilityErrorMessage: string = GlobalConstants.accessibilityErrorMessage;

    /**
     * Creates an instance of BroadcastWidgetComponent.
     * @param {BroadcastWidgetService} broadcastWidgetService
     * @param {DataExchangeService<BroadcastWidgetModel>} dataExchange
     * @param {GlobalStateService} globalState
     *
     * @memberOf BroadcastWidgetComponent
     */
    constructor(private broadcastWidgetService: BroadcastWidgetService,
        private dataExchange: DataExchangeService<BroadcastWidgetModel>,
        private globalState: GlobalStateService) { }

    public ngOnInit(): void {
        this.currentIncidentId = this.incidentId;
        this.currentDepartmentId = this.initiatedDepartmentId;
        this.getLatestBroadcasts(this.currentDepartmentId, this.currentIncidentId);
        this.getAllPublishedBroadcasts();

        this.globalState.Subscribe('incidentChange', (model: KeyValue) => this.incidentChangeHandler(model));
        this.globalState.Subscribe('departmentChange', (model: KeyValue) => this.departmentChangeHandler(model));
        this.globalState.Subscribe('BroadcastPublished', (model) => this.onBroadcastPublish(model));

        // SignalR Notification
        this.globalState.Subscribe('ReceiveBroadcastCreationResponse', (model: BroadCastModel) => {
            this.LatestBroadcastModels.unshift(model);
            this.LatestBroadcastModels.splice(-1, 1);

            this.LatestBroadcasts = Observable.of(this.LatestBroadcastModels
                .map((x: BroadcastWidgetModel) => new TextAccordionModel(x.Message, x.SubmittedOn, '')));
        });
        this.globalState.Subscribe('ReceiveBroadcastModificationResponse', (model: BroadCastModel) => {
            const index: number = this.LatestBroadcastModels
                .findIndex((x) => x.BroadcastId === model.BroadcastId);
            if (index >= 0) {
                this.LatestBroadcastModels.splice(index, 1, model);

                this.LatestBroadcasts = Observable.of(this.LatestBroadcastModels
                    .map((x: BroadcastWidgetModel) => new TextAccordionModel(x.Message, x.SubmittedOn, '')));
            }
        });
    }

    public getLatestBroadcasts(departmentId, incidentId): void {
        this.LatestBroadcastModels = new Array<BroadcastWidgetModel>();
        this.broadcastWidgetService
            .GetLatestBroadcastsByIncidentAndDepartment(departmentId, incidentId)
            .flatMap((x) => x).take(2)
            .subscribe((x) => {
                this.LatestBroadcastModels.push(x);
            }, (error: any) => {
                console.log(`Error: ${error}`);
            }, () => {
                this.LatestBroadcasts = Observable.of(this.LatestBroadcastModels
                    .map((x: BroadcastWidgetModel) => new TextAccordionModel(x.Message, x.SubmittedOn, '')));
            });
    }

    public getAllPublishedBroadcasts(callback?: Function): void {
        const data: BroadcastWidgetModel[] = [];
        this.broadcastWidgetService
            .GetAllPublishedBroadcastsByIncident(this.currentIncidentId)
            .flatMap((x) => x)
            .subscribe((x) => {
                data.push(x);
            }, (error: any) => {
                console.log(`Error: ${error}`);
            }, () => {
                this.AllPublishedBroadcasts = data;
                if (callback) {
                    callback();
                }
            });
    }

    public openBroadcastMessages(): void {
        this.getAllPublishedBroadcasts(() => {
            this.childModal.show();
        });
    }

    public hideAllBroadcastMessages(): void {
        this.childModal.hide();
    }

    ngOnDestroy(): void {
        this.globalState.Unsubscribe('incidentChange');
        this.globalState.Unsubscribe('departmentChange');
        this.globalState.Unsubscribe('BroadcastPublished');
    }

    private incidentChangeHandler(incident: KeyValue): void {
        this.currentIncidentId = incident.Value;
        this.getLatestBroadcasts(this.currentDepartmentId, this.currentIncidentId);
        this.getAllPublishedBroadcasts();
    }

    private onBroadcastPublish(broadcast: BroadCastModel): void {
        if (broadcast.IsSubmitted) {
            this.getLatestBroadcasts(this.currentDepartmentId, this.currentIncidentId);
        }
    }

    private departmentChangeHandler(department: KeyValue): void {
        this.currentDepartmentId = department.Value;
        this.getLatestBroadcasts(this.currentDepartmentId, this.currentIncidentId);
        this.getAllPublishedBroadcasts();
    }
}
