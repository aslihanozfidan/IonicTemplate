import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ForgotPasswordPage } from '../forgotpassword/forgotpassword';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  showRoot = true;
  forgotPasswordRoot = ForgotPasswordPage;
  constructor(public navCtrl: NavController) {

  }

}
