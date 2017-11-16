import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { RequestOptions } from '@angular/http';
import { DatePipe } from '@angular/common';

import { WalletService } from './wallet.service';

@Component({
    selector: 'page-wallet',
    templateUrl: 'wallet.html'
})
export class WalletPage implements OnInit {
    gainAmount: number = 1000;
    modelTransferAmount: number;
    modelWalletAddress: number;
    earningBtc = [];
    usdBtc = [];
    unpaidEarning = [];
    totalUnpaidBtc: number = 0;
    totalUnpaidUsd: number = 0;
    lastActions: [];
    walletData = [{id:"112", walletname: "Han Solo ", walletaddress: "6df4gf6d54g65fd4g56fd4gf564gd" },{id:"224", walletname: "Obi-Wan Kenobi", walletaddress: "gfdgf8g7f8g7f8g78f7g8f787f87f" }];
    constructor(public navCtrl: NavController,
                public toastCtrl: ToastController,
                private walletService: WalletService) {

    }

    getAllBalance() {
        this.modelTransferAmount = this.gainAmount;
    }

    transferWalletAddress(event) {
        let column = event.target;
        this.modelWalletAddress = column.parentNode.previousSibling.previousElementSibling.innerHTML;
    }
    getUnpaid() {
        this.walletService.getUnpaidEarning()
            .subscribe(val => {
                this.unpaidEarning = val;
                for (var i = 0; i < this.unpaidEarning.length; i++) {
                    this.totalUnpaidBtc += this.unpaidEarning[i].earningbtc;
                    this.totalUnpaidUsd += this.unpaidEarning[i].usdbtc;
                }
                this.totalUnpaidBtc = parseFloat(this.totalUnpaidBtc).toFixed(8);
                this.totalUnpaidUsd = parseFloat(this.totalUnpaidUsd).toFixed(2)
              });
    }

    getLastActions() {
        this.walletService.getLastActions()
            .subscribe(val => {
                console.log(val);
                this.lastActions = val;
              });
    }

    doRefresh(refresher) {
        console.log('Begin async operation', refresher);
        this.getUnpaid();
        this.getLastActions();
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

    ngOnInit() {
        this.getUnpaid();
        this.getLastActions();
    }
}
