import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ForgotPasswordPage } from '../forgotpassword/forgotpassword';
import { TabsPage } from '../tabs/tabs';
import { AuthService } from '../auth/auth.service';
import { LoginService } from './login.service';

import { Token } from './token';

interface LoginInformation {
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
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {
    token: string;
    forgotPasswordRoot = ForgotPasswordPage;
    loginInformation: LoginInformation = {email: "", password: "", UTh: "", activationToken: "",
                                          activeStatus: "", address: "", groupId: "", id: "",
                                          firstname: "", lastname: "", username: "", phone: "", insertAt: ""};

    constructor(public navCtrl: NavController,
                public authService: AuthService,
                public loginService: LoginService) {}

    onLogin(event) {
        this.loginInformation.email = event.target[0].value;
        this.loginInformation.password = event.target[1].value;
        this.authService.login(this.loginInformation.email, this.loginInformation.password)
            .subscribe(
              res => {
                  Token.getNesne().setToken(res.activationToken);
                  Token.getNesne().setUserName(res.firstname);
                  Token.getNesne().setUserId(res.id);
                  Token.getNesne().setPhone(res.phone);
                  Token.getNesne().setEmail(res.email);
                  Token.getNesne().setUTh(res.UTh);
                  this.loginInformation.UTh = res.UTh;
                  this.loginInformation.activationToken = res.activationToken;
                  this.loginInformation.activeStatus = res.activeStatus;
                  this.loginInformation.address = res.address;
                  this.loginInformation.groupId = res.groupId;
                  this.loginInformation.id = res.id;
                  this.loginInformation.firstname = res.firstname;
                  this.loginInformation.lastname = res.lastname;
                  this.loginInformation.username = res.username;
                  this.loginInformation.phone = res.phone;
                  this.loginInformation.insertAt = res.insertAt;
                  if (this.loginInformation.activationToken) {
                      this.navCtrl.setRoot(TabsPage, {}, {animate: true, direction: 'forward'});
                      return true;
                  } else {
                      return false;
                  }
              },
              error => {
                  console.log("email ya da şifre yanlış");
                  console.log('login error' + error);
              }
        );
    }
}
