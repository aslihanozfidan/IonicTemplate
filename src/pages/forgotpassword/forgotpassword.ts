import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { ForgotPasswordService } from '../forgotpassword/forgotpassword.service';
import { ForgotPasswordCodePage } from '../forgotpassword/forgotpasswordcode/forgotpasswordcode';

import { Token } from '../login/token';


@Component({
    selector: 'page-forgotpassword',
    templateUrl: 'forgotpassword.html'
})
export class ForgotPasswordPage {
  token = Token.getNesne().getToken();
  email: string;
  loginRoot = LoginPage;
  errorValidate: boolean = false;
  constructor(public navCtrl: NavController,
              private forgotPasswordService: ForgotPasswordService) {}

  forgotPassword(event) {
      this.email = event.target[0].value;
      this.forgotPasswordService.forgotPassword(this.email)
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
