import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Token } from '../login/token';

@Injectable()
export class WalletSettingsService {
    getUrl = "http://192.168.1.153:8080/WebApplication4/rest/";
    id = Token.getNesne().getUserId();
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
