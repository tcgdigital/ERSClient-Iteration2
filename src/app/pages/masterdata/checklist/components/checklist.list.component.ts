import { Component, OnInit, OnDestroy, ViewEncapsulation, ViewChild } from '@angular/core';

import { ChecklistModel } from './checklist.model';
import { InvalidChecklistModel } from './invalid.checklist.model';
import { ChecklistService } from './checklist.service';
import { Observable } from 'rxjs/Rx';
import {
    ResponseModel, DataExchangeService, UtilityService, GlobalStateService
    , SearchConfigModel,
    SearchTextBox, SearchDropdown,
    NameValue, KeyValue, GlobalConstants
} from '../../../../shared';
import { DepartmentModel, DepartmentService } from '../../department';
import { EmergencyTypeModel, EmergencyTypeService } from '../../emergencytype';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
    selector: 'checklist-list',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../views/checklist.list.view.html',
    styleUrls: ['../styles/checklist.style.scss']
})
export class ChecklistListComponent implements OnInit {
    checkLists: ChecklistModel[] = [];
    activeCheckLists: ChecklistModel[] = [];
    activeDepartments: DepartmentModel[] = [];
    activeEmergencyTypes: EmergencyTypeModel[] = [];
    checkListModelPatch: ChecklistModel = null;
    date: Date = new Date();
    StationList: string[] = [];
    currentDepartmentId: number;

    public isShowAddEditChecklist: boolean = true;
    searchConfigs: Array<SearchConfigModel<any>> = new Array<SearchConfigModel<any>>();
    parentChecklistListForSearch: Array<NameValue<number>> = Array<NameValue<number>>();
    emergencyTypesForSearch: Array<NameValue<number>> = Array<NameValue<number>>();
    expandSearch: boolean = false;
    searchValue: string = 'Expand Search';
    invalidChecklists: InvalidChecklistModel[] = [];
    exportLink: string;

    @ViewChild('invalidChecklistModal') public invalidChecklistModal: ModalDirective;

    constructor(private checkListService: ChecklistService, private emergencytypeService: EmergencyTypeService,
        private dataExchange: DataExchangeService<ChecklistModel>, private globalState: GlobalStateService) {

    }

    findIfParent(item: ChecklistModel): any {
        return (item.CheckListChildrenMapper.length > 0);
    }

    getCheckLists(departmentId): void {
        this.checkListService.GetAllByDepartment(departmentId)
            .subscribe((response: ResponseModel<ChecklistModel>) => {
                response.Records.forEach((x) => {
                    x.Active = (x.ActiveFlag === 'Active');
                });
                this.checkLists = response.Records;
                this.checkLists.forEach((a) => {
                    if (a.Stations != null && a.Stations != '') {
                        a.StationList = [];
                        if (a.Stations.indexOf(',') > 0)
                            a.StationList = a.Stations.split(',');
                        else
                            a.StationList.push(a.Stations);
                    }
                    else
                        a.StationList = [];
                });
                // console.log(this.checkLists);
                this.initiateSearchConfigurations();
            },
            (error: any) => {
                console.log(`Error: ${error}`);
            },
            () => {
                this.checkLists.sort((a, b) => {
                    if (a.EmergencyType.EmergencyTypeName < b.EmergencyType.EmergencyTypeName) return -1;
                    if (a.EmergencyType.EmergencyTypeName > b.EmergencyType.EmergencyTypeName) return 1;
                    if (a.Sequence < b.Sequence) return -1;
                    if (a.Sequence > b.Sequence) return 1;

                    return 0;
                });
            });
    }

    getInvalidChecklists(): void {
        this.checkListService.GetInvalidChecklists()
            .subscribe((response: ResponseModel<InvalidChecklistModel>) => {
                this.invalidChecklists = response.Records;
            });
    }

    getEmergencyTypes(): void {
        this.emergencytypeService.GetAll()
            .subscribe((response: ResponseModel<EmergencyTypeModel>) => {
                this.emergencyTypesForSearch = response.Records
                    .map((x) => new NameValue<number>(x.EmergencyTypeName, x.EmergencyTypeId));
            });
        this.initiateSearchConfigurations();
    }

    getAllActiveCheckLists(): void {
        this.checkListService.GetAllActiveCheckLists()
            .subscribe((response: ResponseModel<ChecklistModel>) => {
                this.activeCheckLists = response.Records;
                this.checkLists.forEach((a) => {
                    if (a.Stations != null && a.Stations != '') {
                        if (a.Stations.indexOf(',') > 0)
                            a.StationList = a.Stations.split(',');
                    }
                    else
                        a.StationList = [];
                });
            });
    }

    onCheckListModelSavedSuccess(data: ChecklistModel): void {
        this.checkLists.unshift(data);
    }

    expandSearchPanel(value): void {
        if (!value) {
            this.searchValue = 'Hide Search Panel';
        }
        else {
            this.searchValue = 'Expand Search Panel';
        }
        this.expandSearch = !this.expandSearch;
    }

    ngOnInit(): void {
        this.currentDepartmentId = +UtilityService.GetFromSession('CurrentDepartmentId');
        this.exportLink = GlobalConstants.EXTERNAL_URL + 'api/MasterDataExportImport/GetMasterDataForChecklists/' + this.currentDepartmentId;
        this.getCheckLists(this.currentDepartmentId);
        this.dataExchange.Subscribe('checkListModelSaved',
            (model) => this.onCheckListModelSavedSuccess(model));
        this.dataExchange.Subscribe('checkListListReload',
            (model) => this.onCheckListModelReloadSuccess(model));
        this.globalState.Subscribe('departmentChange', (model) => this.departmentChangeHandler(model));
        this.initiateSearchConfigurations();
        this.getInvalidChecklists();

        this.dataExchange.Subscribe('FileUploadedSuccessfullyCheckList', () => {
            this.getCheckLists(this.currentDepartmentId);
        });
    }

    ngOnDestroy(): void {
        this.dataExchange.Unsubscribe('checkListModelSaved');
        this.dataExchange.Unsubscribe('checkListListReload');
    }

    editChecklist(editedChecklistModel: ChecklistModel): void {
        this.dataExchange.Publish('checklistModelEdited', editedChecklistModel);
    }

    onCheckListModelReloadSuccess(editedChecklistModel: ChecklistModel): void {
        this.getCheckLists(this.currentDepartmentId);
    }

    IsActive(event: any, editedCheckList: ChecklistModel): void {
        this.checkListModelPatch = new ChecklistModel(false);
        this.checkListModelPatch.CheckListId = editedCheckList.CheckListId;
        this.checkListModelPatch.deleteAttributes();
        this.checkListModelPatch.ActiveFlag = 'Active';
        if (!event.checked) {
            this.checkListModelPatch.ActiveFlag = 'InActive';
        }
        this.checkListService.Update(this.checkListModelPatch)
            .subscribe((response: ChecklistModel) => {
                this.getCheckLists(this.currentDepartmentId);
            }, (error: any) => {
                console.log(`Error: ${error}`);
            });
    }

    openInvalidRecords(): void {
        this.invalidChecklistModal.show();
    }

    closeInvalidChecklist(): void {
        this.invalidChecklistModal.hide();
    }

    invokeSearch(query: string): void {
        if (query !== '') {
            query = `${query} and DepartmentId eq ${this.currentDepartmentId}`;
            this.checkListService.GetQuery(query)
                .subscribe((response: ResponseModel<ChecklistModel>) => {
                    response.Records.forEach((x) => {
                        x.Active = (x.ActiveFlag === 'Active');
                    });
                    this.checkLists = response.Records;
                }, ((error: any) => {
                    console.log(`Error: ${error}`);
                }));
        }
        else {
            this.getCheckLists(this.currentDepartmentId);
        }
    }

    invokeReset(): void {
        this.getCheckLists(this.currentDepartmentId);
    }

    private initiateSearchConfigurations(): void {
        const status: Array<NameValue<string>> = [
            new NameValue<string>('Active', 'Active'),
            new NameValue<string>('InActive', 'InActive'),
        ] as Array<NameValue<string>>;

        this.searchConfigs = [
            new SearchTextBox({
                Name: 'CheckListCode',
                Description: 'Checklist Code',
                Value: ''
            }),
            new SearchTextBox({
                Name: 'CheckListDetails',
                Description: 'Checklist Details',
                Value: ''
            }),
            new SearchDropdown({
                Name: 'EmergencyTypeId',
                Description: 'Crisis Type',
                PlaceHolder: 'Select Crisis Type',
                Value: '',
                ListData: this.emergencytypeService.GetAll()
                    .map((x) => x.Records)
                    .map((x) => x.map((y) => new NameValue<number>(y.EmergencyTypeName, y.EmergencyTypeId)))
            }),
            new SearchTextBox({
                Name: 'URL',
                Description: 'URL',
                Value: ''
            }),
            new SearchDropdown({
                Name: 'ActiveFlag',
                Description: 'Status',
                PlaceHolder: 'Select Status',
                Value: '',
                ListData: Observable.of(status)
            })
        ];
    }

    private departmentChangeHandler(department: KeyValue): void {
        this.currentDepartmentId = department.Value;
        this.getCheckLists(this.currentDepartmentId);
    }
}