import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DashboardService } from './dashboard.service';

import { LoginPage } from '../login/login';
import { Token } from '../login/token';

@Component({
    selector: 'page-dashboard',
    templateUrl: 'dashboard.html'
})
export class DashboardPage implements OnInit {
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

  constructor(public navCtrl: NavController,
              private dashboardService: DashboardService) { }

  getRates() {
      this.dashboardService.getBtcRates()
          .subscribe(val => {
              this.lira[1] = val.TRY;
              this.euro[1] = val.EUR;
              this.dolar[1] = val.USD;
              this.lira[3] = val.TRY;
              this.euro[3] = val.EUR;
              this.dolar[3] = val.USD;
              this.lira[5] = val.TRY;
              this.euro[5] = val.EUR;
              this.dolar[5] = val.USD;
          });
  }

  getProgressBar() {
    this.dashboardService.getProgressBar()
        .subscribe(val => {
            this.time = val. day;
            this.earningTotal = val.earnTotal.toFixed(2);
            this.investment = val.paymentAmount;
        });
  }

  getEarning() {
      this.dashboardService.getEarning()
          .subscribe(val => {
              this.earningBtc  = val.earning;
          });
  }

  doRefresh(refresher) {
      console.log('Begin async operation', refresher);
      this.getProgressBar();
      this.getEarning();
      this.getRates();
      setTimeout(() => {
          console.log('Async operation has ended');
          refresher.complete();
      }, 2000);
  }
  ngOnInit(): void {
      this.userName = Token.getNesne().getUserName();
      this.UTh = Token.getNesne().getUTh();

      this.lira[0] = "BTC/TRY";
      this.euro[0] = "BTC/EUR";
      this.dolar[0] = "BTC/USD";
      this.lira[2] = "LTC/TRY";
      this.euro[2] = "LTC/EUR";
      this.dolar[2] = "LTC/USD";
      this.lira[4] = "ETH/TRY";
      this.euro[4] = "ETH/EUR";
      this.dolar[4] = "ETH/USD";

      this.getProgressBar();
      this.getEarning();
      this.getRates();
  }
}
