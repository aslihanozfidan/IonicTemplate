import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { RequestOptions } from '@angular/http';
import { DatePipe } from '@angular/common';

import { WalletPage } from '../wallet/wallet';

import { AddWalletService } from '../addwallet/addwallet.service';

import { Token } from '../login/token';

@Component({
    selector: 'page-addwallet',
    templateUrl: 'addwallet.html'
})
export class AddWalletPage {
    walletRoot = WalletPage;
    id = Token.getNesne().getUserId();
    addWalletName: string;
    addWalletAddress: string;
    errorValidate: boolean = false;
    succesValidate: boolean = false;
    statusText: string;
    constructor(public navCtrl: NavController,
                public toastCtrl: ToastController,
                public addWalletService: AddWalletService,
                public modalCtrl: ModalController) {}

                addWallet(event) {
                    this.addWalletName = event.target[0].value;
                    this.addWalletAddress = event.target[1].value;
                    this.addWalletService.addWallet(this.id, this.addWalletAddress, this.addWalletName, "BTC")
                        .subscribe(
                          res => {
                            this.succesValidate = true;
                            this.statusText = "Cüzdanınız eklenmiştir.";
                            console.log(JSON.stringify(res) + "   ADD WALLETTT");
                          },
                          error => {
                            this.errorValidate = true;
                            this.statusText = "Bir sorun oluştu. Lütfen tekrar deneyiniz.";
                            console.log(error + "   ADD WALLET ERROR");
                          });
                }



}
