import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DashboardService } from './dashboard.service';
import { NotificationsPage } from '../notifications/notifications';

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
    btcRatesChanging = [];
    notificationsRoot = NotificationsPage;
  constructor(public navCtrl: NavController,
              private dashboardService: DashboardService) { }

  getRates() {
      this.dashboardService.getBtcRates()
          .subscribe(val => {
                  this.lira[1] = val.TRY;
                  this.euro[1] = val.EUR;
                  this.dolar[1] = val.USD;
          });
      this.dashboardService.getLtcRates()
          .subscribe(val => {
                  this.lira[3] = val.TRY;
                  this.euro[3] = val.EUR;
                  this.dolar[3] = val.USD;
          });
     this.dashboardService.getEthRates()
          .subscribe(val => {
                  this.lira[5] = val.TRY;
                  this.euro[5] = val.EUR;
                  this.dolar[5] = val.USD;
          });
  }

  getProgressBar() {
    this.dashboardService.getProgressBar()
        .subscribe(val => {
            if(val.time == "null") {
              this.time = 0;
            } else {
              this.time = val. day;
            }
            if(val.earningTotal == "null") {
              this.earningTotal = 0;
            } else {
              this.earningTotal = val.earnTotal.toFixed(2);
            }
            if(val.investment == "null") {
              this.investment = 0;
            } else {
              this.investment = val.paymentAmount;
            }
            this.investment = val.paymentAmount;
        });
  }

  getEarning() {
      this.dashboardService.getEarning()
          .subscribe(val => {
              if(val.earning == "null") {
                this.earningBtc = 0;
              } else {
                this.earningBtc  = val.earning;
                console.log(this.earningBtc);
              }


          });
  }


    getAnnouncements() {
        this.dashboardService.getAnnouncements()
            .subscribe(val => {
                console.log(val);
            });
    }

  getBtcRatesChanging() {
      this.dashboardService.getBtcRatesChanging()
          .subscribe(val => {
              this.btcRatesChanging  = val;
              console.log(this.btcRatesChanging);
          });
  }

  getInvoices() {
      this.dashboardService.getInvoices()
          .subscribe(val => {
              console.log(val + " GET INVOICES");
          });
  }

  getBtcHourlyUpdate() {
      this.dashboardService.getBtcHourlyUpdate()
          .subscribe(val => {
              //console.log(JSON.stringify(val) + " GET BTC HOURLY UPDATE");
          });
  }



  doRefresh(refresher) {
      console.log('Begin async operation', refresher);
      this.getProgressBar();
      this.getEarning();
      this.getRates();
      this.getAnnouncements();
      this.getInvoices();
      //this.getBtcHourlyUpdate();
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
      this.getEarning();;
      this.getBtcRatesChanging();
      this.getRates();
      this.getInvoices();
    //  this.getBtcHourlyUpdate();
  }
}
