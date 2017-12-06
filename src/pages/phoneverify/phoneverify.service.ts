import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { Token } from '../login/token';

@Injectable()
export class PhoneVerifyService {
    getUrl = "http://192.168.1.52:8080/GoodMinersAPI/rest/";
    id = Token.getNesne().getUserId();
    token = Token.getNesne().getToken();
    constructor(private http: Http) {}

    sendMessageWithCode(userId, phoneNum) {
         let body = { 'userId': userId, 'phoneNum': phoneNum };
         let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
         let options = new RequestOptions({ headers: headers });
         return this.http.post(this.getUrl + 'pverifylog/setPhoneVerifyLog', body, options )
             .map(res =>  res.json())
    }
}
