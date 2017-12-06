import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
//import { Observable } from 'rxjs/Observable';

import { Token } from '../login/token';

@Injectable()
export class DashboardService {
    url = "https://api.coinbase.com/v2/exchange-rates?currency=";
    getUrl = "http://192.168.1.52:8080/GoodMinersAPI/rest/";
    id = Token.getNesne().getUserId();
    token = Token.getNesne().getToken();

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
    getEthRates()  {
        return this.http.get(this.url + 'ETH')
            .map(res => {
                let data = res.json();
                return data.data.rates;
            });
    }
    getEarning() {
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
        let options = new RequestOptions({ headers: headers });
        return this.http.get(this.getUrl + 'btcearning/todaysearning/' + this.id, options)
            .map(res => {
                let data = res.json();
                return data;
            });
    }

    getAnnouncements() {
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
        let options = new RequestOptions({ headers: headers });
        return this.http.get(this.getUrl + 'announce/getLatestAnnouncement', options)
            .map(res => {
                let data = res.json();
                return data;
            });
    }
    public getProgressBar() {
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
        let options = new RequestOptions({ headers: headers });
        return this.http.get(this.getUrl + 'progressbar/' + this.id, options)
            .map(res => {
                let data = res.json();
                return data;
            });
    }
   public getBtcRatesChanging() {
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
        let options = new RequestOptions({ headers: headers });
        return this.http.get(this.getUrl + 'btchourlyupdate/getUpdate/', options)
            .map(res => {
                let data = res.json();
              //  console.log(data + " getUpdate");
                return data;
            });
    }
   public getInvoices() {
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
        let options = new RequestOptions({ headers: headers });
        return this.http.get(this.getUrl + 'user/invoice/' + this.id, options)
            .map(res => {
                let data = res.json();
                return data;
            });
    }
    public getBtcHourlyUpdate() {
         let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
         let options = new RequestOptions({ headers: headers });
         return this.http.get(this.getUrl + 'btchourlyupdate/getUpdate/', options)
             .map(res => {
                 let data = res.json();
                 return data;
             });
     }
}
