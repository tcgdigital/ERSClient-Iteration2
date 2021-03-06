import { BaseModel } from '../../../../shared';
import { NotificationModel } from '../../../shared.components/notification';
import { NextOfKinModel } from '../../../shared.components/nextofkins';
import { DepartmentModel } from '../../department';
import { UserPermissionModel } from '../../userpermission';
import { VisaDetailsModel } from './visa.details.model';
import { VolunterPreferenceModel } from './volunter.preference.nodel';
import { TrainingRecordModel } from './training.record.model';
import { PageModel } from '../../page.functionality';


export class UserProfileModel extends BaseModel {
    public UserProfileId: number;
    public UserId: string;
    public IgaCode: string;
    public Name: string;
    public Email: string;
    public Designation: string;
    public DepartmentCode: string;
    public DepartmentName: string;
    public Location: string;
    public DateOfJoining?: Date;
    public DateOfBirth?: Date;
    public ManagerName: string;
    public ManagerEmailId: string;
    public Gender: string;
    public DoRes: string;
    public DoRel: string;
    public EmployeeGroup: string;
    public EmployeeSubGroup: string;
    public Grade: string;
    public HOD: string;
    public LastPromotionDate?: Date;
    public MainContact: string;
    public PersonalEmailId: string;
    public ConfirmationDate?: Date;
    public EmployementStatus: string;
    public AlternateContact: string;
    public DeviceId: string;
    public RegistrationId: string;
    public DeviceOS: string;
    public ResignedOn?: Date;
    public isActive: boolean;
    public isVolunteered: boolean;

    public EmployeeId: string;
    public Nationality: string;
    public PassportNumber: string;
    public PassportValidity?: Date;

    public VisaRecords: string;
    public VoluterPreferenceRecords: string;
    public TrainingDetails: string;
    public NOKDetails: string;

    public UserPermissions?: UserPermissionModel[];
    public Notifications?: NotificationModel[];
    public Departments?: DepartmentModel[];
    public VisaDetails?: VisaDetailsModel[];
    public VolunterPreferences?: VolunterPreferenceModel[];
    public TrainingRecords?: TrainingRecordModel[];
    public NextOfKins?: NextOfKinModel[];

    constructor() {
        super();
        this.UserProfileId = 0;
    }
}

export class UserAuthenticationModel {
    public UserName: string;
    public Email: string;
    public EmailConfirmed: boolean;
    public PhoneNumber: string;
    public Password: string;
    public ConfirmPassword: string;
    public LockoutEnabled: boolean;
    public LockoutEndDateUtc?: Date;
    public AccessFailedCount: number;
}

export class UserPerrmissionModel extends BaseModel {
    public UserPermissionId: number;
    public DepartmentId: number;
    public UserId: number;
    public IsMemberOf: boolean;
    public IsHod: boolean;

    public User: UserProfileModel;
    public Department: DepartmentModel;
}

export class PagePerrmissionModel extends BaseModel{
    public PermissionId: number;
    public DepartmentId: number;
    public PageId: number;
    public CanView: boolean;
    public CanEdit: boolean;
    public CanDelete: boolean;
    public OnlyHOD: boolean;

    public Department: DepartmentModel;
    public Page: PageModel;
}