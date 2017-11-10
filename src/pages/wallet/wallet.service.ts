import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
//import { Observable } from 'rxjs/Observable';

@Injectable()
export class WalletService {
    getUrl = "http://192.168.1.153:8080/WebApplication4/rest/";
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
