import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-walletsettings',
  templateUrl: 'walletsettings.html'
})
export class WalletSettingsPage {

  constructor(public navCtrl: NavController) {

  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

}
