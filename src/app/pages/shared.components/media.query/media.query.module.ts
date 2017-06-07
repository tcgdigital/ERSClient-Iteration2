import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdCheckboxModule } from '@angular2-material/checkbox';

import { MediaQueryRouting } from './media.query.routing';
import { MediaQueryComponent } from './media.query.components';
import { MediaQueryAssignedCallsListComponent, MediaQueryRecievedCallsListComponent } from './components';
import { EnquiryService, CallCentreModule } from '../call.centre';
import { CommunicationLogService } from '../communicationlogs';

import { CallCenterOnlyPageService } from '../../callcenteronlypage/component';
import { DataExchangeService, SharedModule } from '../../../shared';
import { ModalModule } from 'ng2-bootstrap/modal';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        HttpModule,
        SharedModule,
        MdCheckboxModule,
        ModalModule,
        CallCentreModule,
        MediaQueryRouting
    ],
    declarations: [
        MediaQueryComponent,
        MediaQueryAssignedCallsListComponent,
        MediaQueryRecievedCallsListComponent
    ],
    providers: [
        EnquiryService,
        DataExchangeService,
        CallCenterOnlyPageService,
        CommunicationLogService
    ]
})
export class MediaQueryModule { }