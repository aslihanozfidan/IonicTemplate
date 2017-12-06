import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { Token } from '../login/token';
import { LastActionsService } from './lastactions.service';

import { NotificationsPage } from '../notifications/notifications';

@Component({
    selector: 'page-lastactions',
    templateUrl: 'lastactions.html'
})
export class LastActionsPage implements OnInit {
    dolar = [];
    euro = [];
    lira = [];
    earningArray = [];
    earningBtc: number;
    userName: string;
    token: string;
    time: number;
    investment: number;
    earningTotal: number;
    UTh: number = 0;
    lastActions = [];
    lastActionWalletName = [];
    lastActionDate = [];
    notificationsRoot = NotificationsPage;
  constructor(public navCtrl: NavController,
              private lastActionsService: LastActionsService) { }



  getLastActions() {
      this.lastActionsService.getLastActions()
          .subscribe(val => {
              console.log(JSON.stringify(val) + " GET LAST ACTIONS");
              console.log(val + " GET LAST ACTIONS");
              console.log(JSON.stringify(this.lastActions) + " GET LAST ACTIONSSSS");
              this.lastActions = val.reverse();
              this.lastActionWalletName = [];
              this.lastActionDate = [];
              for( var i = 0; i < val.length; i++) {
                this.lastActions[i].date = this.lastActions[i].date.substring(0,10);
                this.lastActionDate.push((val[i].date).substring(0,10));
                this.lastActionWalletName.push(val[i].label);
              }
              console.log(this.lastActionDate + " this.lastActionDate");
              console.log(this.lastActionWalletName + " this.lastActionWalletName");
          });
  }

/*  goActionDetail(label) {

  */


  doRefresh(refresher) {
      console.log('Begin async operation', refresher);
      this.getLastActions();
      setTimeout(() => {
          console.log('Async operation has ended');
          refresher.complete();
      }, 2000);
  }
  ngOnInit(): void {

      this.getLastActions();
  }
}
