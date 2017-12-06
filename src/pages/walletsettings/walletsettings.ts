import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { WalletSettingsService } from './walletsettings.service';
import { WalletService } from '../wallet/wallet.service';

import { Token } from '../login/token';

@Component({
    selector: 'page-walletsettings',
    templateUrl: 'walletsettings.html'
})
export class WalletSettingsPage implements OnInit {
    hiddenWalletAddress: string;
    id = Token.getNesne().getUserId();
    savedWallets = [];
    errorValidate: boolean = false;
    succesValidate: boolean = false;
    statusText: string;
    constructor(public navCtrl: NavController,
                private walletSettingsService: WalletSettingsService,
                private walletService: WalletService) {}

    getSavedWallets() {
      this.walletService.getSavedWallets()
        .subscribe(val => {
          this.savedWallets = val;
          console.log(JSON.stringify(this.savedWallets) + " kayıtlı cüzdanlar");
        });
    }

    walletHide(event) {
      let column = event.target;
      this.hiddenWalletAddress = column.parentNode.previousSibling.previousElementSibling.innerHTML;
      console.log(this.id + "  " + this.hiddenWalletAddress);
      this.walletSettingsService.walletHide(this.id, this.hiddenWalletAddress)
          .subscribe(
            res => {
                console.log(res + " walletHide için ok");
                this.getSavedWallets();
                this.succesValidate = true;
                this.errorValidate = false;
                this.statusText = "The wallet was deleted.";
              },
            error => {
                console.log(error + " walletHide için error");
                this.succesValidate = false;
                this.errorValidate = true;
                this.statusText = "The wallet was not deleted. Please try again.";
          });
    }

    doRefresh(refresher) {
      console.log('Begin async operation', refresher);
      this.getSavedWallets();
      this.succesValidate = false;
      this.errorValidate = false;
      setTimeout(() => {
          console.log('Async operation has ended');
          refresher.complete();
      }, 2000);
    }

      ngOnInit() {
        this.getSavedWallets();
      }
}
