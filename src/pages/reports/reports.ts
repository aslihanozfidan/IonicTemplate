import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { Token } from '../login/token';
import { ReportsService } from './reports.service';

import { NotificationsPage } from '../notifications/notifications';

@Component({
    selector: 'page-reports',
    templateUrl: 'reports.html'
})
export class ReportsPage implements OnInit {
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
    btcRatesChanging = [];
    btcUpdateTime = [];
    btcRateValue = [];
    lineChartData = [];
    notificationsRoot = NotificationsPage;
  constructor(public navCtrl: NavController,
              private reportsService: ReportsService) { }



  getBtcRatesChanging() {
      this.reportsService.getBtcRatesChanging()
          .subscribe(val => {
              this.btcRatesChanging  = val;
              console.log(this.btcRatesChanging);
              for(var i = 0; i < this.btcRatesChanging.length; i++) {
                this.btcUpdateTime.push(this.btcRatesChanging[i].updateTime);
              }
              for(var k = 0; k < this.btcRatesChanging.length; k++) {
                this.btcRateValue.push(this.btcRatesChanging[k].btcValue);
              }
          });
  }

  doRefresh(refresher) {
      console.log('Begin async operation', refresher);
      this.getBtcRatesChanging();
      setTimeout(() => {
          console.log('Async operation has ended');
          refresher.complete();
      }, 2000);
  }
  ngOnInit(): void {
      this.getBtcRatesChanging();
  }
}
