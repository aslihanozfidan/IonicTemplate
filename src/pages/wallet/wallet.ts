import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { WalletService } from './wallet.service';

@Component({
  selector: 'page-wallet',
  templateUrl: 'wallet.html'
})
export class WalletPage {
  totalUnpaidBtc: number = 12;
  totalUnpaidDolar: number = 2500;
  gainAmount: number = 1000;
  modelTransferAmount: number;
  modelWalletAddress: number;
  walletData: Array<string> = [{id:"112", walletname: "Han Solo", walletaddress: "6df4gf6d54g65fd4g56fd4gf564gd" },{id:"224", walletname: "Obi-Wan Kenobi", walletaddress: "gfdgf8g7f8g7f8g78f7g8f787f87f" }];
  constructor(public navCtrl: NavController,
              public toastCtrl: ToastController) {

  }
  getAllBalance() {
    this.modelTransferAmount = this.gainAmount;
  }

  transferWalletAddress(event) {
    let column = event.target;
    this.modelWalletAddress = column.parentNode.previousSibling.previousElementSibling.innerHTML;
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
