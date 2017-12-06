import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { RequestOptions } from '@angular/http';
import { DatePipe } from '@angular/common';

import { WalletService } from './wallet.service';
import { AddWalletPage } from '../addwallet/addwallet';
import { NotificationsPage } from '../notifications/notifications';

import { Token } from '../login/token';

@Component({
    selector: 'page-wallet',
    templateUrl: 'wallet.html'
})
export class WalletPage implements OnInit {
    addWalletRoot = AddWalletPage;
    gainAmount: number = 1000;
    modelTransferAmount: number;
    modelWalletAddress: number;
    modelTrasferMiningAmount: number;
    earningBtc = [];
    usdBtc = [];
    unpaidEarning = [];
    totalUnpaidBtc = 0;
    totalUnpaidUsd = 0;
    lastActions = [];
    paymentAmount = 0;
    wallets = [];
    savedWallets = [];
    id = Token.getNesne().getUserId();
    walletAddress: string;
    btcWalletAmount: number;
    transferSegmentChanged = "gm-wallet";
    errorValidate: boolean = false;
    succesValidate: boolean = false;
    statusText: string;
    noWalletText: string = "You don't have a GM Wallet.";
    notificationsRoot = NotificationsPage;
    transferFromWallet: boolean = true;
    transferFromMining: boolean = true;

    constructor(public navCtrl: NavController,
                public toastCtrl: ToastController,
                private walletService: WalletService,
                public modalCtrl: ModalController) {

    }



    getAllBalance() {
        this.modelTransferAmount = this.btcWalletAmount;
    }

    getAllMiningAmount() {
        this.modelTrasferMiningAmount = this.totalUnpaidBtc;
    }

    transferWalletAddress(event) {
        let column = event.target;
        this.modelWalletAddress = column.parentNode.previousSibling.previousElementSibling.innerHTML;
    }

    getGmWallet() {
        this.walletService.getGmWallet()
            .subscribe(val => {
              console.log(JSON.stringify(val) + " WALLLELLTTS");
              this.wallets = val;
              console.log(this.wallets.length);
                if(this.wallets.length > 0) {
                  this.walletAddress = this.wallets[0].btcwallet;
                  this.btcWalletAmount = this.wallets[0].btcamount;
                } else if (this.wallets.length == "0") {
                  this.walletAddress = this.noWalletText;
                  this.btcWalletAmount = 0;
                }
                if(this.btcWalletAmount == "0") {
                  this.transferFromWallet = false;
                } else {
                  this.transferFromWallet = true;
                }
              });
    }

    getSavedWallets() {
        this.walletService.getSavedWallets()
            .subscribe(val => {
              console.log(JSON.stringify(val));
              this.savedWallets = val;
            });
    }

    getUnpaid() {
        this.walletService.getUnpaidEarning()
            .subscribe(val => {
                this.unpaidEarning = val;
                //console.log(this.unpaidEarning);
                if(isNaN(this.totalUnpaidBtc) || isNaN(this.totalUnpaidUsd)) {
                  this.totalUnpaidBtc = 0;
                  this.totalUnpaidUsd = 0;
                } else {
                  for (var i = 0; i < this.unpaidEarning.length; i++) {
                      this.totalUnpaidBtc += this.unpaidEarning[i].earnignBtc;
                      this.totalUnpaidUsd += this.unpaidEarning[i].usdBtc;
                      this.unpaidEarning[i].createDate = (this.unpaidEarning[i].createDate).substring(0,10);
                  }
                  this.totalUnpaidBtc = parseFloat(this.totalUnpaidBtc).toFixed(8);
                  this.totalUnpaidUsd = parseFloat(this.totalUnpaidUsd).toFixed(2);
                }
                if(this.totalUnpaidBtc == "0") {
                  this.transferFromMining = false;
                } else {
                  this.transferFromMining = true;
                }
              });
    }

    getMonthlyEarning() {
        this.walletService.getMonthlyEarning()
            .subscribe(val => {
              //  console.log(JSON.stringify(val) + "aylık üretim");

              });
    }

    getEarningByUserId() {
        this.walletService.getEarningByUserId()
            .subscribe(val => {
                //console.log(JSON.stringify(val) + "gün gün üretim");

              });
    }

   postCoinTransactionInWallet() {
     var senderWalletType = (this.walletAddress).substring(0,2);
     var receiverWalletType = (this.modelWalletAddress).substring(0,2);
     console.log(this.id + "  " + this.walletAddress + "  " + this.modelWalletAddress + "  " + this.modelTransferAmount + "  " +  senderWalletType + "  " + receiverWalletType);
        this.walletService.coinTransaction(this.id, this.walletAddress, (this.modelWalletAddress).substring(3, this.modelWalletAddress.length), this.modelTransferAmount, senderWalletType, receiverWalletType)
            .subscribe(val => {
                console.log(JSON.stringify(val) + "   getCoinTransaction modelTransferAmount için");
            });
    }

    postCoinTransactionInMining() {
      var senderWalletType = "";
      var receiverWalletType = (this.modelWalletAddress).substring(0,2);
      this.walletAddress = 0;
      console.log(this.id + "  " + this.walletAddress + "  " + this.modelWalletAddress + "  " + this.modelTrasferMiningAmount + "  " +  senderWalletType + "  " + receiverWalletType);
         this.walletService.coinTransaction(this.id, this.walletAddress, this.modelWalletAddress, this.modelTrasferMiningAmount, senderWalletType, receiverWalletType)
             .subscribe(val => {
                 console.log(JSON.stringify(val) + "   getCoinTransaction modelTrasferMiningAmount için");
             });
     }

    addGmWallet() {
      console.log(this.id);
         this.walletService.addGmWallet(this.id)
             .subscribe(
               res => {
                console.log(res + " gmWalletAdd için");
                this.succesValidate = true;
                this.statusText = "Gm Wallet Eklenmiştir.";
              },
               error => {
                 console.log(error + " gmWalletAdd Error");
                 this.errorValidate = true;
                 this.statusText = "Bir sorun oluştu. Lütfen kontrol ediniz.";
               }
             );
     }

    segmentChanged(event) {
      var childs = event._elementRef.nativeElement.childNodes;
      for(var i = 0; i < childs.length; i++) {
        console.log(childs[i].classList);
        if(childs[i].classList != undefined) {
          for(var j = 0; j < childs[i].classList.length; j++) {
            if(childs[i].classList[j] == "segment-activated"){
                console.log("dne");
                var divValue = childs[i].value;
                console.log(childs[i]);
                //document.getElementById("this-month-gain")
            }
          }
        }
      }
    }

    doRefresh(refresher) {
        console.log('Begin async operation', refresher);
        this.getUnpaid();
        this.getGmWallet();
        this.getMonthlyEarning();
        this.getSavedWallets();
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
        this.getGmWallet();
        this.getMonthlyEarning();
        this.getSavedWallets();
    }
}
