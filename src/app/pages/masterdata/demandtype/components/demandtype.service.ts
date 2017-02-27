import { Injectable, Output, EventEmitter } from '@angular/core';
import { Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { DemandTypeModel } from './demandtype.model';
import {
    ResponseModel, DataService,
    DataServiceFactory, DataProcessingService,
    IServiceInretface
} from '../../../../shared';

@Injectable()
export class DemandTypeService implements IServiceInretface<DemandTypeModel> {
    private _dataService: DataService<DemandTypeModel>;

    constructor(private dataServiceFactory: DataServiceFactory) {
        let option: DataProcessingService = new DataProcessingService();
        this._dataService = this.dataServiceFactory
            .CreateServiceWithOptions<DemandTypeModel>('DemandTypes', option);
    }

    GetAll(): Observable<ResponseModel<DemandTypeModel>> {
        return this._dataService.Query()
            .Expand('ApproverDepartment($select=DepartmentName)')
            .Execute();
    }

    Get(id: string | number): Observable<DemandTypeModel> {
        return this._dataService.Get(id.toString()).Execute();
    }

    Create(entity: DemandTypeModel): Observable<DemandTypeModel> {
        return this._dataService.Post(entity).Execute();
    }

    CreateBulk(entities: DemandTypeModel[]): Observable<DemandTypeModel[]> {
        return Observable.of(entities);
    }

    Update(entity: DemandTypeModel): Observable<DemandTypeModel> {
        let key: string = entity.DemandTypeId.toString()
        return this._dataService.Patch(entity, key)
            .Execute();
    }

    Delete(entity: DemandTypeModel): void {
    }
}