import {
    Component, ViewEncapsulation,
    Output, EventEmitter, Input, OnInit
} from '@angular/core';
import {KeyValue} from '../../../shared';
import { GlobalStateService, UtilityService } from '../../services';
import { Router } from '@angular/router';
import * as jwtDecode from 'jwt-decode';
import { AuthenticationService } from '../../../pages/login/components/authentication.service';
import { GlobalConstants } from '../../constants/constants';

@Component({
    selector: '[brand-header]',
    templateUrl: './brand.header.view.html',
    styleUrls: ['./brand.header.style.scss'],
    encapsulation: ViewEncapsulation.None
})
export class BrandHeaderComponent implements OnInit {
    @Input() userName: string;
    @Input() lastLogin: Date;
    @Input() isLanding: boolean;

    @Output() hambargerClicked: EventEmitter<any> = new EventEmitter<any>();
    @Output() contactClicked: EventEmitter<any> = new EventEmitter<any>();
    @Output() helpClicked: EventEmitter<any> = new EventEmitter<any>();
    @Output() logoutClicked: EventEmitter<any> = new EventEmitter<any>();
    @Output() changePasswordClicked: EventEmitter<any> = new EventEmitter<any>();

    public HelpFileFath: string;
    public FileName: string;
    public logoImage: string = 'assets/images/logo_pal1.png';
    public logoUrl: string = '#';
    currentIncidentId: number;
    public isShowPage: boolean = true;
    currentDepartmentId: number;
    public enabledPassword: boolean = !GlobalConstants.AD_AUTH_ENABLED;
    constructor(private router: Router, private authenticationService: AuthenticationService,private globalState: GlobalStateService) {
    }

    ngOnInit(): void {
        const DocumentFilePath = 'CMS Guide.pdf';
        this.HelpFileFath = './assets/static-content/' + DocumentFilePath.replace(/^.*[\\\/]/, '');
        const Extension = DocumentFilePath.replace(/^.*[\\\/]/, '').split('.').pop();
        this.FileName = 'HelpFile.' + Extension;
        const token = UtilityService.GetFromSession('access_token');
        if(token){
            const tokenData = jwtDecode(token);
            if(tokenData && tokenData.UserName)
                this.userName = tokenData.UserName;
        }

        this.currentIncidentId = +UtilityService.GetFromSession('CurrentIncidentId');
        this.currentDepartmentId = +UtilityService.GetFromSession("CurrentDepartmentId");
        this.globalState.Subscribe('departmentChange', (model: KeyValue) => this.departmentChangeHandler(model));
    }

    private departmentChangeHandler(department: KeyValue): void {
		this.currentDepartmentId = department.Value;
	}

    public onHambargerClicked($event): void {
        // console.log('brand header click');
        this.hambargerClicked.emit($event);
    }

    public onContactClicked($event): void {
        this.contactClicked.emit($event);
    }

    public onHelpClicked($event): void {
        this.helpClicked.emit($event);
    }

    public onLogoutClicked($event): void {
        this.logoutClicked.emit($event);
        this.authenticationService.Logout();
        this.router.navigate(['login']);
    }

    public onChangePasswordClicked($event): void {
        this.changePasswordClicked.emit($event);
    }
}