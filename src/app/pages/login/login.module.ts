import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IncidentService } from "../incident";
import { LoginRoutings } from './login.routing';
import { LoginComponent } from './components';
import { UserProfileService } from "../shared.components";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        LoginRoutings
    ],
    declarations: [
        LoginComponent
    ],
    providers: [
        IncidentService,
        UserProfileService
    ]
})
export class LoginModule {
}