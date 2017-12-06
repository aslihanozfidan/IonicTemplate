import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TabsPage } from '../../tabs/tabs';
import { AuthService } from '../../auth/auth.service';
import { ForgotPasswordCodeService } from '../forgotpasswordcode/forgotpasswordcode.service';

import { Token } from '../../login/token';

interface ForgotPasswordCode {
    email: string,
    password: string,
    UTh: number,
    activationToken: string,
    activeStatus: boolean,
    address: string,
    groupId: string,
    id: string,
    firstname: string,
    lastname: string,
    username: string,
    phone: string,
    insertAt: string
}

@Component({
    selector: 'page-forgotpasswordcode',
    templateUrl: 'forgotpasswordcode.html'
})
export class ForgotPasswordCodePage {
    token: string;
    errorValidate: boolean = false;
    email: string;
    newPassword: string;
    phoneCode: string;

    constructor(public navCtrl: NavController,
                public forgotPasswordCodeService: ForgotPasswordCodeService) {}

    changePasswordWithPhoneCode(event) {
        this.email = event.target[0].value;
        this.newPassword = event.target[1].value;
        this.phoneCode = event.target[2].value;
        this.forgotPasswordCodeService.changePasswordWithPhoneCode(this.email, this.newPassword, this.phoneCode)
          .subscribe(
            res => {
            this.navCtrl.push(ForgotPasswordCodePage);
            this.errorValidate = false;
            console.log(JSON.stringify(res) + "   FORGOT PASSWORD ok");
          },
            error => {
            this.errorValidate = true;
            console.log(JSON.stringify(error) + "   FORGOT PASSWORD error");
          });
    }
}
