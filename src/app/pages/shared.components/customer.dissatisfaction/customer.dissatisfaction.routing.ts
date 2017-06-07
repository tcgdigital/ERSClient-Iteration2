import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerDissatisfactionComponent } from './customer.dissatisfaction.components';
import { CustomerDissatisfactionAssignedCallsListComponent, CustomerDissatisfactionRecievedCallsListComponent } from "./components";


const customerDissatisfactionRoutes: Routes = [
    
    {
       
        path: '',
        component: CustomerDissatisfactionComponent,
        children: [
            {
                path: '',
                component: CustomerDissatisfactionAssignedCallsListComponent
            },
             {
                 path: 'assignedcalls',
                component: CustomerDissatisfactionAssignedCallsListComponent
            },
             {
                path: 'recievedCalls',
                 component: CustomerDissatisfactionRecievedCallsListComponent
            }]
    }];

export const  CustomerDissatisfactionRoutesRouting: ModuleWithProviders
    = RouterModule.forChild(customerDissatisfactionRoutes);