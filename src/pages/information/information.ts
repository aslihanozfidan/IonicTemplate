import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-information',
  templateUrl: 'information.html'
})
export class InformationPage {

  constructor(public navCtrl: NavController,
              public toastCtrl: ToastController) {

  }
  changeInformationToast() {
    const toastInfo = this.toastCtrl.create({
      message: 'Information was changed.',
      duration: 3000,
      position: 'top'
    });
  
    toastInfo.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toastInfo.present();
  }
}
