import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IncidentService } from '../incident';
import { LoginRoutings } from './login.routing';
import { PagePermissionService } from "../../pages/masterdata/page.functionality/components/page.permission.service";
import {
    LoginComponent, ForgotPasswordComponent,
    ChangePasswordComponent
} from './components';
import { KeyValueService } from '../../shared';
import { UserProfileService } from '../masterdata/userprofile/components';
import { LoginRootComponent } from './login.root.component';
import { TimeZoneService } from "../shared.components/timezone";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        LoginRoutings
    ],
    declarations: [
        LoginRootComponent,
        LoginComponent,
        ForgotPasswordComponent,
        ChangePasswordComponent
    ],
    providers: [
        IncidentService,
        UserProfileService,
        PagePermissionService,
        TimeZoneService,
        KeyValueService
    ]
})
export class LoginModule {
}