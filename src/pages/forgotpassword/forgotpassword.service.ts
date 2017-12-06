import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class ForgotPasswordService {

    getUrl = "http://192.168.1.52:8080/GoodMinersAPI/rest/";
    constructor(private http: Http) {}

    forgotPassword(email) {
         let body = { 'email': email };
         let headers = new Headers({ 'Content-Type': 'application/json' });
         let options = new RequestOptions({ headers: headers });
         return this.http.post(this.getUrl + 'forgotpassword/forgetPasswordRequestMobile', body, options )
             .map(res =>  res.json())
    }
}
