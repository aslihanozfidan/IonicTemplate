import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { InvoicesService } from './invoices.service';

import { Token } from '../login/token';

@Component({
    selector: 'page-invoices',
    templateUrl: 'invoices.html'
})
export class InvoicesPage implements OnInit {
    hiddenWalletAddress: string;
    id = Token.getNesne().getUserId();
    invoices = [];
    errorValidate: boolean = false;
    succesValidate: boolean = false;
    statusText: string;
    constructor(public navCtrl: NavController,
                private invoicesService: InvoicesService) {}

                getInvoices() {
                    this.invoicesService.getInvoices()
                        .subscribe(val => {
                            console.log(JSON.stringify(val) + " GET INVOICE");
                            this.invoices = val.reverse();
                        });
                }

    doRefresh(refresher) {
      console.log('Begin async operation', refresher);
      this.getInvoices();
      setTimeout(() => {
          console.log('Async operation has ended');
          refresher.complete();
      }, 2000);
    }

      ngOnInit() {
        this.getInvoices();
      }
}
