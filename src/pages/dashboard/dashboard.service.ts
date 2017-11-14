import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
//import { Observable } from 'rxjs/Observable';

import { Token } from '../login/token';

@Injectable()
export class DashboardService {
    url = "https://api.coinbase.com/v2/exchange-rates?currency=";
    getUrl = "http://192.168.1.153:8080/GoodMinersAPI/rest/";
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
        console.log(Token.getNesne().getToken());
        let headers = new Headers({ 'Authorization': 'Bearer ' + Token.getNesne().getToken() });
        let options = new RequestOptions({ headers: headers });
        console.log(options +  " opt");
        return this.http.get(this.getUrl + 'btcearning/todaysearning/' + this.id, options)
            .map(res => {
                let data = res.json();
                return data;
            });
    }
}
