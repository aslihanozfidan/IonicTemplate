import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DashboardService } from './dashboard.service';

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
  constructor(public navCtrl: NavController,
    private dashboardService: DashboardService) { }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  ngOnInit(): void {
    this.dashboardService.getEarning()
      .subscribe(val => {
        this.earningArray[0] = val;
        this.earningBtc = val.earningbtc;
      });
    this.lira[0] = "BTC/TRY";
    this.euro[0] = "BTC/EUR";
    this.dolar[0] = "BTC/USD";
    this.lira[2] = "LTC/TRY";
    this.euro[2] = "LTC/EUR";
    this.dolar[2] = "LTC/USD";
    this.lira[4] = "ETH/TRY";
    this.euro[4] = "ETH/EUR";
    this.dolar[4] = "ETH/USD";
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

}
