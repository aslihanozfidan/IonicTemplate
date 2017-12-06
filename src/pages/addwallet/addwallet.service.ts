import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/map';

import { Token } from '../login/token';

@Injectable()
export class AddWalletService {

    getUrl = "http://192.168.1.52:8080/GoodMinersAPI/rest/";
    id = Token.getNesne().getUserId();
    token = Token.getNesne().getToken();
    constructor(private http: Http) {}

    addWallet(userId, walletAddress, walletName, walletType) {
         let body = { 'userId': userId, 'walletAddress': walletAddress, 'walletName': walletName, 'walletType': walletType };
         let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
         let options = new RequestOptions({ headers: headers });
         return this.http.post(this.getUrl + 'savedwallets/walletsave', body, options )
             .map(res =>  res.json())
    }

}
