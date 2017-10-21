import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-wallet',
  templateUrl: 'wallet.html'
})
export class WalletPage {

  constructor(public navCtrl: NavController, 
              public toastCtrl: ToastController) {

  } 
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  requestPaymentToast() {
    const toastPayment = this.toastCtrl.create({
      message: 'Request payment was sended.',
      duration: 3000,
      position: 'middle'
    });
  
    toastPayment.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toastPayment.present();
  }
}
