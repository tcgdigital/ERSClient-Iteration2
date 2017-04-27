import {
    Component, ViewEncapsulation, OnDestroy,
    Output, EventEmitter, OnInit, Input
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
    FormGroup, FormControl,
    FormBuilder, AbstractControl, Validators
} from '@angular/forms';
import { ToastrService, ToastrConfig } from 'ngx-toastr';


import { PresidentMessageService } from './presidentMessage.service';
import { PresidentMessageModel } from './presidentMessage.model';
import {
    ResponseModel, DataExchangeService, KeyValue,
    GlobalConstants, UtilityService, GlobalStateService
} from '../../../../shared';

@Component({
    selector: 'presidentMessage-entry',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../views/presidentMessage.entry.view.html'
})
export class PresidentMessageEntryComponent implements OnInit, OnDestroy {
    @Input() initiatedDepartmentId: string;
    @Input() incidentId: string;

    public form: FormGroup;
    PresidentsMessage: PresidentMessageModel;
    date: Date = new Date();
    precidentMessages: PresidentMessageModel[] = [];
    Action: string;
    currentIncidentId: number;
    currentDepartmentId: number;
    showAdd: boolean;

    /**
     * Creates an instance of PresidentMessageEntryComponent.
     * @param {PresidentMessageService} presidentMessageService 
     * @param {DataExchangeService<PresidentMessageModel>} dataExchange 
     * @param {GlobalStateService} globalState 
     * @param {FormBuilder} builder 
     * 
     * @memberOf PresidentMessageEntryComponent
     */
    constructor(private presidentMessageService: PresidentMessageService,
        private dataExchange: DataExchangeService<PresidentMessageModel>,
        private globalState: GlobalStateService,
        private builder: FormBuilder,
        private toastrService: ToastrService,
        private toastrConfig: ToastrConfig) {
        this.showAdd = false;

    }

    ngOnInit(): void {
        this.InitiateForm();
        this.currentIncidentId = +this.incidentId;
        this.currentDepartmentId = +this.initiatedDepartmentId;
        this.dataExchange.Subscribe("OnPresidentMessageUpdate", model => this.onPresidentMessageUpdate(model));
        this.globalState.Subscribe('incidentChange', (model: KeyValue) => this.incidentChangeHandler(model));
        this.globalState.Subscribe('departmentChange', (model: KeyValue) => this.departmentChangeHandler(model));
    }

    ngOnDestroy(): void {
        this.dataExchange.Unsubscribe("OnPresidentMessageUpdate");
        this.globalState.Unsubscribe('incidentChange');
        this.globalState.Unsubscribe('departmentChange');
    }

    private incidentChangeHandler(incident: KeyValue): void {
        this.currentIncidentId = incident.Value;
    }

    private departmentChangeHandler(department: KeyValue): void {
        this.currentDepartmentId = department.Value;
    }

    onPresidentMessageUpdate(presedientMessageModel: PresidentMessageModel): void {
        this.PresidentsMessage = presedientMessageModel;
        this.PresidentsMessage.PresidentsMessageId = presedientMessageModel.PresidentsMessageId;
        this.PresidentsMessage.IsUpdated = true;
        this.Action = "Edit";
        this.showAdd = true;
    }

    save(): void {
        if (this.form.valid) {
            this.PresidentsMessage.IsPublished = false;
            this.Action = "Save";
            this.CreateOrUpdatePresidentMessage();
        }
    }

    publish(): void {
        if (this.form.valid) {
            this.PresidentsMessage.IsPublished = true;
            this.PresidentsMessage.PublishedBy = 1;
            this.PresidentsMessage.PublishedOn = this.date;
            this.Action = "Publish";
            this.CreateOrUpdatePresidentMessage();
        }
    }

    private CreateOrUpdatePresidentMessage(): void {
        UtilityService.setModelFromFormGroup<PresidentMessageModel>
            (this.PresidentsMessage, this.form, x => x.Message, x => x.Remarks);

        if (this.PresidentsMessage.PresidentsMessageId == 0) {
            this.PresidentsMessage.IncidentId = this.currentIncidentId;
            this.PresidentsMessage.InitiateDepartmentId = this.currentDepartmentId;

            this.presidentMessageService.Create(this.PresidentsMessage)
                .subscribe((response: PresidentMessageModel) => {
                    this.toastrService.success('President message Saved successfully.', 'Success', this.toastrConfig);
                    this.dataExchange.Publish("PresidentMessageModelSaved", response);
                    this.showAdd = false;
                }, (error: any) => {
                    console.log(`Error: ${error}`);
                });
        }
        else {
            this.presidentMessageService.Update(this.PresidentsMessage)
                .subscribe((response: PresidentMessageModel) => {
                    this.toastrService.success('President message edited successfully.', 'Success', this.toastrConfig);
                    this.dataExchange.Publish("PresidentMessageModelUpdated", response);
                    this.showAdd = false;
                }, (error: any) => {
                    console.log(`Error: ${error}`);
                });
        }
    }

    cancel(): void {
        this.InitiateForm();
        this.showAdd = false;
    };

    private InitiateForm(): void {
        this.form = new FormGroup({
            PresidentsMessageId: new FormControl(0),
            Message: new FormControl('', [Validators.required, Validators.maxLength(500)]),
            Remarks: new FormControl('', [Validators.required, Validators.maxLength(500)])
        });

        this.PresidentsMessage = new PresidentMessageModel()
        this.Action = "Save";
    };

    showAddRegion(ShowAdd: Boolean): void {
        this.showAdd = true;
    };
}