import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class ForgotPasswordCodeService {

    getUrl = "http://192.168.1.52:8080/GoodMinersAPI/rest/";
    constructor(private http: Http) {}

    changePasswordWithPhoneCode(email, password, phoneCode) {
         let body = { 'email': email, 'password': password, 'verificationCode': phoneCode };
         let headers = new Headers({ 'Content-Type': 'application/json' });
         let options = new RequestOptions({ headers: headers });
         return this.http.post(this.getUrl + 'forgotpassword/activatePasswordChange', body, options )
             .map(res =>  res.json())
    }
}
