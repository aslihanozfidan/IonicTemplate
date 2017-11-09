import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-wallet',
  templateUrl: 'wallet.html'
})
export class WalletPage {
  totalUnpaidBtc: number = 12;
  totalUnpaidDolar: number = 2500;
  gainAmount: number = 1000;
  constructor(public navCtrl: NavController,
              public toastCtrl: ToastController) {

  }
  getAllBalance() {
    console.log(this.gainAmount);
    this.gainAmount = this.gainAmount;
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
