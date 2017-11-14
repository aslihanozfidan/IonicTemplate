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
  @Output() tokenEvent:EventEmitter<boolean> = new EventEmitter();
  token: string;
  forgotPasswordRoot = ForgotPasswordPage;
  loginInformation: LoginInformation = {email: '', password: '', UTh: '', activationToken: '',
                                        activeStatus: '', address: '', groupId: '', id: '',
                                        firstname: '', lastname: '', username: '', phone: '', insertAt: ''};

  constructor(public navCtrl: NavController,
              public authService: AuthService,
              public loginService: LoginService) {}

  giveToken() {
    if (this.tokenEvent !== undefined) {
      
    }
  }

  onLogin(event) {
    this.loginInformation.email = event.target[0].value;
    this.loginInformation.password = event.target[1].value;
    console.log(this.loginInformation.email);
    console.log(this.loginInformation.password);
    this.authService.login(this.loginInformation.email, this.loginInformation.password)
        .subscribe(
          res => {
            Token.getNesne().setToken(res.activationToken);
            console.log("Token ="+ Token.getNesne().getToken());
            console.log('login response= ' + res);
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
            console.log(this.loginInformation.UTh);
            console.log(this.loginInformation.activationToken);
            console.log(this.loginInformation.activeStatus);
            console.log(this.loginInformation.address);
            console.log(this.loginInformation.groupId);
            console.log(this.loginInformation.id);
            console.log(this.loginInformation.firstname);
            console.log(this.loginInformation.lastname);
            console.log(this.loginInformation.username);
            console.log(this.loginInformation.phone);
            console.log(this.loginInformation.insertAt);
            if (this.loginInformation.activationToken) {
              console.log("ttttrue");
              return true;
            } else {
              console.log("fffalse");
              return false;
            }
          },
          error => {
            /*this.isLogin = false;*/
            console.log("email ya da şifre yanlış");

            console.log('login error' + error);
          }
        );
  }

  getToken(event) {
    return Token.getNesne().getToken();
  }
}
