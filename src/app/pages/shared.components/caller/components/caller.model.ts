import { BaseModel } from '../../../../shared';
import { DepartmentModel } from '../../../masterdata/department';
import { EnquiryModel,DemandModel } from '../../../shared.components';

export class CallerModel extends BaseModel {
    public CallerId: number;
    public CallerName: string;
    public ContactNumber: string;
    public AlternateContactNumber: string;
    public Relationship: string;
    public EmailId: string;
    public Location: string;


    public Demands?: DemandModel[];
    public Enquiries?: EnquiryModel[];

    constructor() {
        super();

        this.CallerId = 0;
        this.CallerName = '';
        this.ContactNumber = '';
        this.AlternateContactNumber = '';
        this.Relationship = '';
        this.EmailId = '';
        this.Location = '';
    }
}