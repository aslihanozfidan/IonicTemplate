import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ForgotPasswordPage } from '../forgotpassword/forgotpassword';
import { TabsPage } from '../tabs/tabs';

import { AuthService } from '../auth/auth.service';
import { LoginService } from './login.service';

interface LoginInformation {
  email: string,
  password: string
}

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  isLogin: boolean = false;
  rootPage: any;
  showRoot = true;
  tab = document.querySelector('#tab');
  forgotPasswordRoot = ForgotPasswordPage;
  loginInformation: LoginInformation = {email: '', password: ''};

  constructor(public navCtrl: NavController,
              public authService: AuthService,
              public loginService: LoginService) {}

  onLogin(event) {
    this.loginInformation.email = event.target[0].value;
    this.loginInformation.password = event.target[1].value;
    console.log(this.loginInformation.email);
    console.log(this.loginInformation.password);
    this.authService.login(this.loginInformation.email, this.loginInformation.password)
        .subscribe(
          res => {
            this.isLogin = true;
            this.rootPage = TabsPage;
            console.log(this.isLogin);
            console.log('login response= ' + res);
          },
          error => {
            this.isLogin = false;
            console.log('login error' + error);
          }
        );
  }
}
