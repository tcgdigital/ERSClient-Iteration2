import {
    Component, ViewEncapsulation, Input,
    OnInit, OnDestroy, AfterContentInit, ViewChild, Injector
} from '@angular/core';
import {
    FormGroup, FormControl, FormBuilder,
    AbstractControl, Validators, ReactiveFormsModule
} from '@angular/forms';
import { Observable, Subscription } from 'rxjs/Rx';
import { ToastrService, ToastrConfig } from 'ngx-toastr';
import { Router, NavigationEnd } from '@angular/router';
import { ChecklistModel, ChecklistMapper } from '../../../masterdata/checklist/components/checklist.model';

import { ActionableModel } from './actionable.model';
import { ActionableService } from './actionable.service';
import { DepartmentService, DepartmentModel } from '../../../masterdata/department/components';
import * as moment from 'moment/moment';
import {
    ResponseModel, DataExchangeService,
    UtilityService, GlobalConstants, KeyValue, BaseModel,
    FileUploadService, GlobalStateService, SharedModule, AuthModel
} from '../../../../shared';
import { ModalDirective } from 'ngx-bootstrap/modal';
import * as _ from 'underscore';
import { ChecklistTrailModel, ChecklistTrailService } from "../../checklist.trail";
@Component({
    selector: 'actionable-active',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../views/actionable.active.html'
})
export class ActionableActiveComponent implements OnInit, OnDestroy, AfterContentInit {
    @ViewChild('myFileInput') myInputVariable: any;
    @ViewChild('childModal') public childModal: ModalDirective;
    @ViewChild('childModalTrail') public childModalTrail: ModalDirective;

    editActionableModel: ActionableModel = null;
    tempActionable: ActionableModel = null;
    activeActionables: ActionableModel[] = [];
    filesToUpload: File[];
    filepathWithLinks: string = null;
    fileName: string = null;
    actionableModelToUpdate: ActionableModel = null;
    actionableWithParentsChilds: ActionableModel[] = [];
    parentChecklistIds: number[] = [];
    credential: AuthModel;
    protected _onRouteChange: Subscription;
    isArchive: boolean = false;
    public globalStateProxyOpen: GlobalStateService;
    public form: FormGroup;
    public isShowViewAdditionalInfo: boolean = true;
    public isShowUpdateAdditionalInfo: boolean = true;
    public isShowCommentTrail: boolean = true;
    public isShowUpdateOpenChecklist: boolean = true;
    public completionStatusTypes: any[] = GlobalConstants.CompletionStatusType;
    public ChecklistMappers: ChecklistMapper[] = [];
    public checklistTrail: ChecklistTrailModel = null;
    public checklistTrails: ChecklistTrailModel[] = [];
    public allDepartments: DepartmentModel[] = [];
    public listActionableSelected: any[] = [];
    disableUploadButton: boolean;
    private currentDepartmentId: number = null;
    private currentIncident: number = null;

    constructor(formBuilder: FormBuilder, private actionableService: ActionableService,
        private fileUploadService: FileUploadService,
        private departmentService: DepartmentService,
        private dataExchange: DataExchangeService<boolean>,
        private globalState: GlobalStateService,
        private toastrService: ToastrService,
        private toastrConfig: ToastrConfig,
        private _router: Router,
        private injector: Injector,
        private checklistTrailService: ChecklistTrailService) {
        this.filesToUpload = [];
        this.globalStateProxyOpen = injector.get(GlobalStateService);
    }

    public ngOnInit(): any {
        this.ChecklistMappers = [];
        this.disableUploadButton = true;
        this.currentDepartmentId = +UtilityService.GetFromSession('CurrentDepartmentId');
        // this.globalState.Subscribe('departmentChange', (model: KeyValue) => this.departmentChangeHandler(model));
        if (this._router.url.indexOf('archivedashboard') > -1) {
            this.isArchive = true;
            this.currentIncident = +UtilityService.GetFromSession('ArchieveIncidentId');
        } else {
            this.isArchive = false;
            this.currentIncident = +UtilityService.GetFromSession('CurrentIncidentId');
        }
        this.getAllActiveActionable(this.currentIncident, this.currentDepartmentId);

        this.credential = UtilityService.getCredentialDetails();
        this.form = this.resetActionableForm();
        this.actionableModelToUpdate = new ActionableModel();
        this.dataExchange.Subscribe('OpenActionablePageInitiate',
            (model) => this.onOpenActionablePageInitiate(model));

        this.globalState.Subscribe('incidentChange', (model: KeyValue) => this.incidentChangeHandler(model));
        this.globalState.Subscribe('departmentChangeFromDashboard', (model: KeyValue) => this.departmentChangeHandler(model));

        // Signalr Notifivation
        this.globalState.Subscribe('ReceiveChecklistStatusChangeResponse', (model: ActionableModel) => {
            this.getAllActiveActionable(model.IncidentId, model.DepartmentId);
        });

        this.globalState.Subscribe('ReceiveChecklistCreationResponse', (count: number) => {
            if (count > 0)
                this.getAllActiveActionable(this.currentIncident, this.currentDepartmentId);
        });
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

    onOpenActionablePageInitiate(isOpen: boolean): void {
        this.getAllActiveActionable(this.currentIncident, this.currentDepartmentId);
    }

    ngOnDestroy(): void {
        this.dataExchange.Unsubscribe('OpenActionablePageInitiate');
        // this.globalState.Unsubscribe('incidentChange');
        // this.globalState.Unsubscribe('departmentChangeFromDashboard');
    }

    ngAfterContentInit(): void {
        this.setRagIntervalHandler();
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

    IsDone(event: any, editedActionable: ActionableModel): void {
        editedActionable.Done = true;
        const tempActionable = this.activeActionables.find((item: ActionableModel) => {
            return (item.ActionId === editedActionable.ActionId);
        });
        tempActionable.Done = editedActionable.Done;
        this.actionableService.SetParentActionableStatusByIncidentIdandDepartmentIdandActionable(this.currentIncident,
            this.currentDepartmentId, editedActionable, this.activeActionables);

    }

    upload(actionableClicked: ActionableModel) {
        if (this.filesToUpload.length > 0) {
            this.disableUploadButton = false;
            const baseUrl = GlobalConstants.EXTERNAL_URL;
            this.fileUploadService.uploadFiles<string>(baseUrl + 'api/fileUpload/upload', this.filesToUpload)
                .subscribe((result: string) => {
                    this.filepathWithLinks = `${GlobalConstants.EXTERNAL_URL}UploadFiles/${result.replace(/^.*[\\\/]/, '')}`;
                    const extension = result.replace(/^.*[\\\/]/, '').split('.').pop();
                    this.fileName = `Checklist_${actionableClicked.CheckListCode}_${actionableClicked.IncidentId}.${extension}`;
                }, (error) => {
                    console.log(`Error: ${error}`);
                });
        }
    }

    fileChangeEvent(fileInput: any) {
        this.filesToUpload = [];
        for (let i = 0; i < fileInput.target.files.length; i++) {
            const extension = fileInput.target.files[i].name.split('.').pop();
            if (extension !== 'exe' && extension !== 'dll') {
                this.filesToUpload.push(fileInput.target.files[i]);
                this.disableUploadButton = false;
            }
            else {
                this.toastrService.error('Invalid File Format!', 'Error', this.toastrConfig);
                this.disableUploadButton = true;
                this.myInputVariable.nativeElement.value = '';
            }
        }
    }

    clearFileUpload(event: any): void {
        this.myInputVariable.nativeElement.value = '';
        this.filepathWithLinks = null;
        this.fileName = null;
        this.disableUploadButton = true;
    }

    getAllActiveActionable(incidentId: number, departmentId: number): void {
        this.parentChecklistIds = new Array<number>();
        this.ChecklistMappers = new Array<ChecklistMapper>();
        this.activeActionables = new Array<ActionableModel>();
        this.actionableWithParentsChilds = new Array<ActionableModel>();

        const parents: number[] = [];
        const mappers: ChecklistMapper[] = [];

        this.actionableService.GetAllOpenByIncidentIdandDepartmentId(incidentId, departmentId)
            .subscribe((res: Array<ResponseModel<ActionableModel>>) => {
                if (res && res.length > 1) {
                    if (res[0]) {
                        this.activeActionables = res[0].Records;
                        if (this.activeActionables.length > 0) {
                            this.activeActionables.forEach((x) => {
                                x['expanded'] = false;
                                x['actionableChilds'] = [];
                            });
                        }
                    }
                    if (res[1]) {
                        this.actionableWithParentsChilds = res[1].Records;
                        if (this.actionableWithParentsChilds.length > 0) {
                            const parentMapper = _.flatten(_.map(this.actionableWithParentsChilds, (x) => x.CheckList.CheckListParentMapper)) as ChecklistMapper[];
                            this.parentChecklistIds = _.unique(parentMapper.map((x) => x.ParentCheckListId));
                            this.ChecklistMappers = _.unique(parentMapper);

                            // this.actionableWithParentsChilds.forEach((actionable: ActionableModel) => {
                            //     if (actionable.CheckList.CheckListParentMapper.length > 0) {
                            //         actionable.CheckList.CheckListParentMapper.forEach((item: ChecklistMapper) => {
                            //             parents.push(item.ParentCheckListId);
                            //             mappers.push(item);
                            //         });
                            //     }
                            // });
                            // this.parentChecklistIds = _.unique(parents);
                            // this.ChecklistMappers = _.unique(mappers);
                        }
                    }
                }




                // this.getAllActiveActionableByIncident(this.currentIncident);
            }, (error: any) => {
                console.log(`Error: ${error}`);
            });
    }

    getAllActiveActionableByIncident(incidentId): void {
        this.parentChecklistIds = [];
        const parents: number[] = [];
        this.ChecklistMappers = [];
        const mappers: ChecklistMapper[] = [];

        this.actionableService.GetAllOpenByIncidentId(incidentId)
            .subscribe((response: ResponseModel<ActionableModel>) => {
                this.actionableWithParentsChilds = response.Records;
                this.actionableWithParentsChilds.forEach((actionable: ActionableModel) => {
                    if (actionable.CheckList.CheckListParentMapper.length > 0) {
                        actionable.CheckList.CheckListParentMapper.forEach((item: ChecklistMapper) => {
                            parents.push(item.ParentCheckListId);
                            mappers.push(item);
                        });
                    }
                });
                this.parentChecklistIds = _.unique(parents);
                this.ChecklistMappers = _.unique(mappers);
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

    cancelUpdateCommentAndURL(editedActionableModel: ActionableModel): void {
        if (!this.isArchive)
            this.myInputVariable.nativeElement.value = '';
        this.filepathWithLinks = null;
        this.fileName = null;
        this.childModal.hide();
    }

    updateCommentAndURL(values: object, editedActionableModel: ActionableModel): void {
        this.editActionableModel = new ActionableModel();
        this.editActionableModel.ActionId = editedActionableModel.ActionId;
        this.editActionableModel.Comments = this.form.controls['Comments'].value;
        if (this.filepathWithLinks !== '') {
            this.editActionableModel.UploadLinks = this.filepathWithLinks;
        }

        this.actionableService.Update(this.editActionableModel)
            .subscribe((response: ActionableModel) => {
                this.toastrService.success('Actionable comments updated successfully.', 'Success', this.toastrConfig);
                editedActionableModel.show = false;
                this.tempActionable = this.activeActionables
                    .find((item: ActionableModel) => item.ActionId === editedActionableModel.ActionId);
                this.tempActionable.Comments = this.editActionableModel.Comments;
                this.tempActionable.UploadLinks = this.filepathWithLinks;
                this.tempActionable.FileName = this.fileName;
                this.childModal.hide();
            }, (error: any) => {
                console.log(`Error: ${error}`);
            });
    }

    activeActionableClick(activeActionablesUpdate: ActionableModel[]): void {
        const filterActionableUpdate = activeActionablesUpdate
            .filter((item: ActionableModel) => item.Done === true);
        if (filterActionableUpdate.length > 0) {
            filterActionableUpdate.forEach((x) => {
                delete x['expanded'];
                delete x['actionableChilds'];
                delete x['Done'];
            });
            this.batchUpdate(filterActionableUpdate.map(x => {
                return {
                    ActionId: x.ActionId,
                    ActualClose: (x.CompletionStatus === 'Closed') ? new Date() : null,
                    CompletionStatusChangedBy: this.credential.UserId,
                    CompletionStatus: x.CompletionStatus,
                    CompletionStatusChangedOn: new Date()
                };
            }));
        }
        else {
            this.toastrService.error('Please select at least one checklist', 'Error', this.toastrConfig);
        }
    }

    private batchUpdate(data: any[]) {
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
                                this.getAllActiveActionable(this.currentIncident, this.currentDepartmentId);
                                this.globalStateProxyOpen.NotifyDataChanged('checkListStatusChange', null);
                            });
                    });
            });
    }


    private setRagIntervalHandler(): void {
        Observable.interval(10000).subscribe((_) => {
            this.activeActionables.forEach((item: ActionableModel) => {
                item.RagColor = UtilityService.GetRAGStatus('Checklist', item.AssignedDt, item.ScheduleClose);
                // console.log(`Schedule run RAG ststus: ${item.RagColor}`);
            });
        }, (error: any) => {
            console.log(`Error: ${error}`);
        });
    }

    private resetActionableForm(actionable?: ActionableModel): FormGroup {
        return new FormGroup({
            Comments: new FormControl(''),
            URL: new FormControl('')
        });
    }

    private incidentChangeHandler(incident: KeyValue): void {
        this.currentIncident = incident.Value;
        this.getAllActiveActionable(this.currentIncident, this.currentDepartmentId);
        this.form = this.resetActionableForm();
    }

    private departmentChangeHandler(department: KeyValue): void {
        this.currentDepartmentId = department.Value;
        this.getAllActiveActionable(this.currentIncident, this.currentDepartmentId);
        this.form = this.resetActionableForm();
    }

    private hasChildChecklist(checkListId): boolean {
        try {
            return this.actionableWithParentsChilds.find(
                (item: ActionableModel) => item.DepartmentId === this.currentDepartmentId && item.ChklistId === checkListId)
                .CheckList.CheckListChildrenMapper.length > 0;
        } catch (x) {
            return false;
        }
    }

    private GetListOfChildActionables(checkListId: number, incidentId: number, callback?: Function): void {
        this.actionableService.GetAcionableByIncidentIdandCheckListId(incidentId, checkListId)
            .subscribe((res: ResponseModel<ActionableModel>) => {
                if (callback) {
                    callback(res.Records[0]);
                }
            });
    }
}