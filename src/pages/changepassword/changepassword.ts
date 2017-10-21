import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-changepassword',
  templateUrl: 'changepassword.html'
})
export class ChangePasswordPage {

  constructor(public navCtrl: NavController,
              public toastCtrl: ToastController) {}

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
