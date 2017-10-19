import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
//import { Observable } from 'rxjs/Observable';

@Injectable()
export class DashboardService {
    url = "https://api.coinbase.com/v2/exchange-rates?currency=";
    constructor(private http: Http) {}

    getBtcRates() {
        return this.http.get(this.url + 'BTC')
            .map(res => {               
                let data = res.json();
                return data.data.rates;
            });
    }
    getLtcRates() {
        return this.http.get(this.url + 'LTC')
            .map(res => {           
                let data = res.json();
                return data.data.rates;
            });
    }
    getEthRates() {
        return this.http.get(this.url + 'ETH')
            .map(res => {
                let data = res.json();
                return data.data.rates;
            });
    }
}