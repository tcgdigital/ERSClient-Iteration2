import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SituationalUpdateQueryComponent } from './situational.update.query.components';
import { SituationalUpdateQueryAssignedCallsListComponent, SituationalUpdateQueryRecievedCallsListComponent } from "./components";


const situationalUpdateQueryRoutes: Routes = [
    
    {
       
        path: '',
        component: SituationalUpdateQueryComponent,
        children: [
            {
                path: '',
                component: SituationalUpdateQueryAssignedCallsListComponent
            },
             {
                 path: 'assignedcalls',
                component: SituationalUpdateQueryAssignedCallsListComponent
            },
             {
                path: 'recievedCalls',
                 component: SituationalUpdateQueryRecievedCallsListComponent
            }]
    }];

export const  SituationalUpdateQueryRouting: ModuleWithProviders
    = RouterModule.forChild(situationalUpdateQueryRoutes);