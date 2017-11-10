import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
//import { Observable } from 'rxjs/Observable';

@Injectable()
export class WalletService {
    getUrl = "http://192.168.3.49:8080/WebApplication4/webresources/";
    id = "1";
    constructor(private http: Http) {}

    public setAllBalance = (gainAmount) => {
      return gainAmount;
    };

    getEarning() {
        return this.http.get(this.getUrl + 'rest.btcearning/' + this.id)
            .map(res => {
                let data = res.json();
                return data;
            });
    }
}
