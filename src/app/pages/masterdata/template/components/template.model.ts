import { NgModule } from '@angular/core';
import { BaseModel } from '../../../../shared';
import { EmergencySituationModel } from '../../emergency.situation';

export class TemplateModel extends BaseModel {
    public TemplateId: number;
    public EmergencySituationId: number;
    public TemplateMediaId: number;
    public Description: string;
    public Subject: string;
    public Active: boolean;

    public EmergencySituation: EmergencySituationModel;

    constructor(){
        super();
    }
}