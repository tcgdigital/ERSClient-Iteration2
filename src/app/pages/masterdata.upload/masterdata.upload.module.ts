import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap';

import { MasterDataUploadRouting } from './masterdata.upload.routing';
import { MasterDataUploadComponent } from './masterdata.upload.component';

import {
    MasterDataUploadForValidService,
    MasterDataUploadForInvalidService,
    MasterDataUploadListComponent
} from './components';
import {
    ValidPassengersListComponent, ValidCargoListComponent,
    ValidCrewListComponent, ValidGroundVictimListComponent
} from './components/valid';
import {
    InvalidCrewListComponent, InvalidPassengersListComponent,
    InvalidCargoListComponent, InvalidGroundVictimListComponent
} from './components/invalid';
import { DataExchangeService, FileUploadService, SharedModule } from '../../shared';
import { OrganizationService } from '../shared.components/organization'

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        SharedModule,
        ReactiveFormsModule,
        ModalModule.forRoot(),
        MasterDataUploadRouting
    ],
    declarations: [
        MasterDataUploadComponent,
        MasterDataUploadListComponent,
        ValidPassengersListComponent,
        ValidCargoListComponent,
        ValidCrewListComponent,
        InvalidCrewListComponent,
        InvalidPassengersListComponent,
        InvalidCargoListComponent,
        ValidGroundVictimListComponent,
        InvalidGroundVictimListComponent
    ],
    providers: [
        DataExchangeService,
        FileUploadService,
        MasterDataUploadForValidService,
        MasterDataUploadForInvalidService,
        OrganizationService
    ]
})
export class MasterDataUploadModule { }