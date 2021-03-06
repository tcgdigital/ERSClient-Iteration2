import {
    Component, ViewEncapsulation,
    Input, OnInit, OnDestroy, ViewChild, Injector
} from '@angular/core';
import {
    FormGroup, FormControl, FormBuilder,
    AbstractControl, Validators, ReactiveFormsModule
} from '@angular/forms';
import { Observable, Subscription } from 'rxjs/Rx';
import { ToastrService, ToastrConfig } from 'ngx-toastr';
import { Router, NavigationEnd } from '@angular/router';
import { DepartmentService, DepartmentModel } from '../../../masterdata/department/components';
import { ChecklistModel, ChecklistMapper } from '../../../masterdata/checklist/components/checklist.model';

import { ActionableModel } from './actionable.model';
import { ActionableService } from './actionable.service';
import * as moment from 'moment/moment';
import { ChecklistTrailModel, ChecklistTrailService } from "../../checklist.trail";
import {
    ResponseModel, DataExchangeService, KeyValue, BaseModel,
    UtilityService, GlobalConstants, GlobalStateService, AuthModel
} from '../../../../shared';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
    selector: 'actionable-close',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../views/actionable.close.html'
})
export class ActionableClosedComponent implements OnInit, OnDestroy {
    @ViewChild('childModal') public childModal: ModalDirective;
    @ViewChild('childModalTrail') public childModalTrail: ModalDirective;
    closeActionables: ActionableModel[] = [];
    public form: FormGroup;
    actionableModelToUpdate: ActionableModel;
    credential: AuthModel;
    protected _onRouteChange: Subscription;
    isArchive: boolean = false;
    parentChecklistIds: number[] = [];
    actionableWithParents: ActionableModel[] = [];
    public globalStateProxy: GlobalStateService;
    public completionStatusTypes: any[] = GlobalConstants.CompletionStatusType;
    private currentDepartmentId: number = null;
    private currentIncident: number = null;
    public isShowUpdateCloseChecklist: boolean = true;
    public checklistTrail: ChecklistTrailModel = null;
    public checklistTrails: ChecklistTrailModel[] = [];
    public allDepartments: DepartmentModel[] = [];
    public listActionableSelected: any[] = [];
    public ChecklistMappers: ChecklistMapper[] = [];
    //actionableWithParentsChilds: ActionableModel[] = [];

    constructor(formBuilder: FormBuilder, private actionableService: ActionableService,
        private dataExchange: DataExchangeService<boolean>, private globalState: GlobalStateService,
        private toastrService: ToastrService, private departmentService: DepartmentService,
        private toastrConfig: ToastrConfig, private _router: Router,
        private injector: Injector, private checklistTrailService: ChecklistTrailService) {
        this.globalStateProxy = injector.get(GlobalStateService);
    }

    ngOnInit(): any {
        this.currentDepartmentId = +UtilityService.GetFromSession('CurrentDepartmentId');

        if (this._router.url.indexOf('archivedashboard') > -1) {
            this.isArchive = true;
            this.currentIncident = +UtilityService.GetFromSession('ArchieveIncidentId');

        }
        else {
            this.isArchive = false;
            this.currentIncident = +UtilityService.GetFromSession('CurrentIncidentId');
        }
        //this.getAllActiveActionableByIncident(this.currentIncident);
        this.getAllCloseActionable(this.currentIncident, this.currentDepartmentId);
        this.credential = UtilityService.getCredentialDetails();


        this.form = this.resetActionableForm();
        this.actionableModelToUpdate = new ActionableModel();
        this.dataExchange.Subscribe('CloseActionablePageInitiate', (model) => this.onCloseActionablePageInitiate(model));

        this.globalState.Subscribe('incidentChange', (model: KeyValue) => this.incidentChangeHandler(model));
        this.globalState.Subscribe('departmentChangeFromDashboard', (model: KeyValue) => this.departmentChangeHandler(model));

        // Signalr Notifivation
        this.globalState.Subscribe('ReceiveChecklistStatusChangeResponse', (model: ActionableModel) => {
            this.getAllCloseActionable(model.IncidentId, model.DepartmentId);
        });
    }

    onCloseActionablePageInitiate(isClosed: boolean): void {
        this.getAllCloseActionable(this.currentIncident, this.currentDepartmentId);
    }

    ngOnDestroy(): void {
        this.dataExchange.Unsubscribe('CloseActionablePageInitiate');
        this.dataExchange.Unsubscribe('departmentChangeFromDashboard');

    }

    IsReopen(event: any, editedActionable: ActionableModel): void {
        const tempActionable = this.closeActionables
            .find((item: ActionableModel) => item.ActionId === editedActionable.ActionId);
        tempActionable.Done = true;
        this.actionableService.SetParentActionableStatusByIncidentIdandDepartmentIdandActionable(this.currentIncident,
            this.currentDepartmentId, editedActionable, this.closeActionables);

    }

    getAllCloseActionable(incidentId: number, departmentId: number): void {
        this.actionableService.GetClosedActionable(incidentId, departmentId)
            .subscribe((res: ResponseModel<ActionableModel>[]) => {
                if (res && res.length > 1) {
                    if (res[0]) {
                        this.closeActionables = res[0].Records;
                        if (this.closeActionables.length > 0) {
                            this.closeActionables.forEach((x) => {
                                x['expanded'] = false;
                                x['Done'] = false;
                                x['actionableChilds'] = [];
                            });
                        }
                    }
                    if (res[1]) {
                        this.actionableWithParents = res[1].Records;
                        this.parentChecklistIds = this.actionableWithParents.map((actionable) => {
                            return 1;
                        });
                    }
                }
            }, (error: any) => {
                console.log(`Error: ${error}`);
            });
    }

    getAllCloseActionableByIncident(incidentId): void {
        this.actionableService.GetAllCloseByIncidentId(incidentId)
            .subscribe((response: ResponseModel<ActionableModel>) => {
                this.actionableWithParents = response.Records;
                this.parentChecklistIds = this.actionableWithParents.map((actionable) => {
                    return 1;
                });
            }, (error: any) => {
                console.log(`Error: ${error}`);
            });
    }

    openActionableDetail(editedActionableModel: ActionableModel): void {
        this.form = new FormGroup({
            Comments: new FormControl(editedActionableModel.Comments),
            URL: new FormControl(editedActionableModel.URL)
        });
        this.actionableModelToUpdate = editedActionableModel;
        this.childModal.show();
    }

    openTrail(actionable: ActionableModel): void {
        this.getActionableTrails(actionable.ActionId);
    }

    getActionableTrails(actionaId: number): void {
        this.checklistTrailService.GetTrailByActionableId(actionaId)
            .subscribe((response: ResponseModel<ChecklistTrailModel>) => {
                this.checklistTrails = response.Records;
                this.childModalTrail.show();
            }, (error: any) => {
                console.log('error:  ' + error);
            });
    }

    cancelTrail(): void {
        this.childModalTrail.hide();
    }

    openChildActionable(actionable: ActionableModel): void {
        actionable['expanded'] = !actionable['expanded'];
        this.actionableService.GetChildActionables(actionable.ChklistId, this.currentIncident)
            .subscribe((responseActionable: ResponseModel<ActionableModel>) => {
                this.departmentService.GetDepartmentNameIds()
                    .subscribe((response: ResponseModel<DepartmentModel>) => {
                        actionable['actionableChilds'] = [];
                        responseActionable.Records[0].CheckList.CheckListChildrenMapper.forEach((item: ChecklistMapper) => {
                            this.GetListOfChildActionables(item.ChildCheckListId, this.currentIncident, (child: ActionableModel) => {
                                child['DepartmentName'] = response.Records
                                    .find((y) => y.DepartmentId === child.DepartmentId).DepartmentName;
                                actionable['actionableChilds'].push(child);
                            });
                        });
                    }, (error: any) => {
                        console.log(`Error: ${error}`);
                    });
            }, (error: any) => {
                console.log(`Error: ${error}`);
            });
    }

    closedActionableClick(closedActionablesUpdate: ActionableModel[]): void {
        const filterActionableUpdate = closedActionablesUpdate.filter((item: ActionableModel) => {
            return (item.Done === true);
        });
        if (filterActionableUpdate.length > 0) {
            filterActionableUpdate.forEach((x) => {
                delete x['expanded'];
                delete x['actionableChilds'];

            });
            this.batchUpdate(filterActionableUpdate.map((x) => {
                return {
                    ActionId: x.ActionId,
                    ActualClose: (x.CompletionStatus === 'Closed') ? new Date() : null,
                    CompletionStatus: x.CompletionStatus,
                    CompletionStatusChangedBy: this.credential.UserId,
                    CompletionStatusChangedOn: new Date()
                };
            }));
        }
        else {
            this.toastrService.error('Please select at least one checklist', 'Error', this.toastrConfig);
        }
    }

    batchUpdate(data: any[]) {
        this.listActionableSelected = data;
        this.actionableService.BatchOperation(data)
            .subscribe((x) => {
                this.SaveChecklistTrails(this.listActionableSelected);

            }, (error: any) => {
                console.log(`Error: ${error}`);
            });
    }

    private SaveChecklistTrails(data: any[]): void {
        this.checklistTrails = [];
        this.departmentService.GetAllActiveDepartments()
            .subscribe((allResultDepartments: ResponseModel<DepartmentModel>) => {
                this.allDepartments = allResultDepartments.Records;
                this.actionableService.GetAllByIncident(+UtilityService.GetFromSession('CurrentIncidentId'))
                    .subscribe((resultsActionable: ResponseModel<ActionableModel>) => {
                        data.forEach((item: ActionableModel) => {
                            this.checklistTrail = new ChecklistTrailModel();
                            this.checklistTrail.ChecklistTrailId = 0;
                            this.checklistTrail.ActionId = item.ActionId;
                            this.checklistTrail.CompletionStatus = item.CompletionStatus;
                            this.checklistTrail.CompletionStatusChangedOn = new Date();
                            this.checklistTrail.CompletionStatusChangedBy = +UtilityService.GetFromSession('CurrentUserId');
                            this.checklistTrail.DepartmentId = +UtilityService.GetFromSession("CurrentDepartmentId");
                            this.checklistTrail.Department = this.allDepartments.filter((itemDepartment: DepartmentModel) => {
                                return itemDepartment.DepartmentId == this.checklistTrail.DepartmentId;
                            })[0];
                            this.checklistTrail.ActiveFlag = 'Active';
                            this.checklistTrail.CreatedBy = +UtilityService.GetFromSession('CurrentUserId');
                            this.checklistTrail.CreatedOn = new Date();
                            this.checklistTrail.IncidentId = +UtilityService.GetFromSession('CurrentIncidentId');
                            const actionables: ActionableModel[] = resultsActionable.Records.filter((actionableItem: ActionableModel) => {
                                return actionableItem.ActionId == item.ActionId;
                            });
                            if (actionables.length > 0) {
                                this.checklistTrail.ChklistId = actionables[0].ChklistId;
                            }
                            this.checklistTrail.Query = `<div><p>Checklist completion status is <strong>${item.CompletionStatus}</strong> which is changed by department ${this.checklistTrail.Department.DepartmentName} on <strong>Date :</strong>  ${moment(this.checklistTrail.CreatedOn).format('DD-MMM-YYYY HH:mm')}  </p><div></p><div>`;
                            this.checklistTrails.push(this.checklistTrail);
                        });

                        this.checklistTrailService.BatchOperation(this.checklistTrails)
                            .subscribe((result: ResponseModel<BaseModel>) => {
                                this.toastrService.success('Actionables updated successfully.', 'Success', this.toastrConfig);
                                this.getAllCloseActionable(this.currentIncident, this.currentDepartmentId);
                                this.globalStateProxy.NotifyDataChanged('checkListStatusChange', null);

                            });
                    });


            });
    }




    cancelUpdateCommentAndURL(): void {
        this.childModal.hide();
    }

    private incidentChangeHandler(incident: KeyValue): void {
        this.currentIncident = incident.Value;
        this.getAllCloseActionable(this.currentIncident, this.currentDepartmentId);
    }

    private departmentChangeHandler(department: KeyValue): void {
        this.currentDepartmentId = department.Value;
        this.getAllCloseActionable(this.currentIncident, this.currentDepartmentId);
    }

    private hasChildChecklist(checkListId): boolean {
        try {
            return this.closeActionables.find(
                (item: ActionableModel) => item.DepartmentId === this.currentDepartmentId && item.ChklistId === checkListId)
                .CheckList.CheckListChildrenMapper.length > 0;
        } catch (x) {
            return false;
        }
    }

    private resetActionableForm(actionable?: ActionableModel): FormGroup {
        return new FormGroup({
            Comments: new FormControl(''),
            URL: new FormControl('')
        });
    }

    private GetListOfChildActionables(checkListId: number, incidentId: number, callback?: Function): void {
        this.actionableService.GetAcionableByIncidentIdandCheckListId(incidentId, checkListId)
            .subscribe((res: ResponseModel<ActionableModel>) => {
                if (callback) {
                    callback(res.Records[0]);
                }
            });
    }

    // getAllActiveActionableByIncident(incidentId): void {
    //     this.parentChecklistIds = [];
    //     const parents: number[] = [];
    //     this.ChecklistMappers = [];
    //     const mappers: ChecklistMapper[] = [];

    //     this.actionableService.GetAllOpenByIncidentId(incidentId)
    //         .subscribe((response: ResponseModel<ActionableModel>) => {
    //             this.actionableWithParentsChilds = response.Records;
    //             this.actionableWithParentsChilds.forEach((actionable: ActionableModel) => {
    //                 if (actionable.CheckList.CheckListParentMapper.length > 0) {
    //                     actionable.CheckList.CheckListParentMapper.forEach((item: ChecklistMapper) => {
    //                         parents.push(item.ParentCheckListId);
    //                         mappers.push(item);
    //                     });
    //                 }
    //             });

    //         }, (error: any) => {
    //             console.log(`Error: ${error}`);
    //         });
    // }
}