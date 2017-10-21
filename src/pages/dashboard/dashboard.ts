import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DashboardService } from '../../pages/dashboard/dashboard.service';
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage implements OnInit {
  dolar = [];
  euro = [];
  lira = [];

  constructor(public navCtrl: NavController,
    private dashboardService: DashboardService) { }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  ngOnInit() {
    this.dashboardService.getBtcRates().subscribe(val => this.lira[0] = "BTC/TRY");
    this.dashboardService.getBtcRates().subscribe(val => this.euro[0] = "BTC/EUR");
    this.dashboardService.getBtcRates().subscribe(val => this.dolar[0] = "BTC/USD");
    this.dashboardService.getBtcRates().subscribe(val => this.lira[1] = val.TRY);
    this.dashboardService.getBtcRates().subscribe(val => this.euro[1] = val.EUR);
    this.dashboardService.getBtcRates().subscribe(val => this.dolar[1] = val.USD);
    this.dashboardService.getLtcRates().subscribe(val => this.lira[2] = "LTC/TRY");
    this.dashboardService.getLtcRates().subscribe(val => this.euro[2] = "LTC/EUR");
    this.dashboardService.getLtcRates().subscribe(val => this.dolar[2] = "LTC/USD");
    this.dashboardService.getLtcRates().subscribe(val => this.lira[3] = val.TRY);
    this.dashboardService.getLtcRates().subscribe(val => this.euro[3] = val.EUR);
    this.dashboardService.getLtcRates().subscribe(val => this.dolar[3] = val.USD);
    this.dashboardService.getEthRates().subscribe(val => this.lira[4] = "ETH/TRY");
    this.dashboardService.getEthRates().subscribe(val => this.euro[4] = "ETH/EUR");
    this.dashboardService.getEthRates().subscribe(val => this.dolar[4] = "ETH/USD");
    this.dashboardService.getEthRates().subscribe(val => this.lira[5] = val.TRY);
    this.dashboardService.getEthRates().subscribe(val => this.euro[5] = val.EUR);
    this.dashboardService.getEthRates().subscribe(val => this.dolar[5] = val.USD);
    console.log(this.lira);
    console.log(this.euro);
    console.log(this.dolar);




  }
}
