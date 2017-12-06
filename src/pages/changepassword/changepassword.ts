import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { Token } from '../login/token';
import { ChangePasswordService } from './changepassword.service';

@Component({
    selector: 'page-changepassword',
    templateUrl: 'changepassword.html'
})
export class ChangePasswordPage {
  modelNewPassword: string;
  modelOldPassword: string;
  modelNewPasswordAgain: string;
  id = Token.getNesne().getUserId();
  errorValidate: boolean = false;
  succesValidate: boolean = false;
  statusText: string;
  constructor(public navCtrl: NavController,
              public toastCtrl: ToastController,
              private changepasswordService: ChangePasswordService) {}

  changeUserPassword() {
      console.log(this.modelNewPassword + "  " + this.modelOldPassword + "  " + this.modelNewPasswordAgain + "  " + this.id);
      if((this.modelNewPassword != this.modelOldPassword)
          && (this.modelNewPassword == this.modelNewPasswordAgain)
          && (this.modelNewPassword != null)
          && (this.modelOldPassword != null)
          && (this.modelNewPasswordAgain != null)) {
        this.changepasswordService.changeUserPassword(this.id, this.modelOldPassword, this.modelNewPassword)
            .subscribe(
              res => {
                this.succesValidate = true;
                this.errorValidate = false;
                this.statusText = "Şifreniz güncellenmiştir.";
                console.log(JSON.stringify(res) + "   changeUserPassword ok");
              },
              error => {
                this.errorValidate = true;
                this.succesValidate = false;
                this.statusText = "Bir sorun oluştu. Lütfen tekrar deneyiniz.";
                console.log(error + "   changeUserPassword ERROR");
            });
      } else {
            console.log("lütfen bilgilerinizi kontrol ediniz.");
            this.errorValidate = true;
            this.succesValidate = false;
            this.statusText = "Bir sorun oluştu. Lütfen tekrar deneyiniz.";
      }

  }


  changePasswordToast() {
      const toastPassword = this.toastCtrl.create({
          message: 'Password was changed.',
          duration: 3000,
          position: 'top'
      });

    toastPassword.onDidDismiss(() => {
        console.log('Dismissed toast');
    });

    toastPassword.present();
  }
}
