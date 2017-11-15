import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/map';
//import { Observable } from 'rxjs/Observable';

import { Token } from '../login/token';

@Injectable()
export class WalletService {
    getUrl = "http://192.168.1.153:8080/GoodMinersAPI/rest/";
    id = Token.getNesne().getUserId();
    constructor(private http: Http) {}

    public setAllBalance = (gainAmount) => {
      return gainAmount;
    };

    getUnpaidEarning() {
        let headers = new Headers({ 'Authorization': 'Bearer ' + Token.getNesne().getToken() });
        let options = new RequestOptions({ headers: headers });
        return this.http.get(this.getUrl + 'btcearning/unpaidearning/' + this.id, options)
            .map(res => {
                let data = res.json();
                console.log(data);
                return data;
            });
    }

    getLastActions() {
        let headers = new Headers({ 'Authorization': 'Bearer ' + Token.getNesne().getToken() });
        let options = new RequestOptions({ headers: headers });
        return this.http.get(this.getUrl + 'cointransactions/' + this.id, options)
            .map(res => {
                let data = res.json();
                console.log(data);
                return data;
            });
    }
}
