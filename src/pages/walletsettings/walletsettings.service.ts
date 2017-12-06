import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { Token } from '../login/token';

@Injectable()
export class WalletSettingsService {
    id = Token.getNesne().getUserId();
    token = Token.getNesne().getToken();
    constructor(private http: Http) {}

    walletHide(userId, walletAddress) {
         let body = JSON.stringify({ 'userId': userId, 'walletAddress': walletAddress });
         let headers = new Headers({ 'Authorization': 'Bearer ' + this.token, 'Content-Type': 'application/json' });
         let options = new RequestOptions({ headers: headers });
         return this.http.post('http://192.168.1.52:8080/GoodMinersAPI/rest/savedwallets/wallethide', body, options )
             .map(res =>  res.json())
    }
}
