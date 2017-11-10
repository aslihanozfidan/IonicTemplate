import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { ForgotPasswordPage } from '../forgotpassword/forgotpassword';

import { AuthService } from '../auth/auth.service';

interface LoginInformation {
  email: string,
  password: string
}

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit {
  showRoot = true;
  tab = document.querySelector('#tab');
  forgotPasswordRoot = ForgotPasswordPage;
  loginInformation: LoginInformation = {email: 'emir@beetelekom.com.tr', password: 'admin'};

  constructor(public navCtrl: NavController,
              public authService: AuthService) {}


  onLogin() {
    console.log(this.loginInformation.email);
    console.log(this.loginInformation.password);
    this.authService.login(this.loginInformation.email, this.loginInformation.password)
        .subscribe(
          res => {
            console.log('login response= ' + res);
          },
          error => {
            console.log('login error');
          }
        );
  }

  hideTab() {
    //this.tab.setAttribute("style","display:none;");
  }

}
