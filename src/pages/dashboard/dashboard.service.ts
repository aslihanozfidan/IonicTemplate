import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
//import { Observable } from 'rxjs/Observable';

@Injectable()
export class DashboardService {
    url = "https://api.coinbase.com/v2/exchange-rates?currency=";
    getUrl = "http://192.168.3.49:8080/WebApplication4/webresources/";
    id = "1";
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
    getEarning() {
        return this.http.get(this.getUrl + 'rest.btcearning/' + this.id)
            .map(res => {
                let data = res.json();
                return data;
            });
    }
}
