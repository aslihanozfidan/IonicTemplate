import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthService {
  //  getUrl = "http://192.168.1.153:8080/WebApplication4/rest/rest.users/token/";
    getUrl = "http://192.168.10.4:8080/GoodMinersAPI/rest/user/token";

    constructor(private http: Http) {}
         login(email, password) {
              let body = JSON.stringify({ 'email': email, 'password': password });
              let headers = new Headers({ 'Content-Type': 'application/json' });
              let options = new RequestOptions({ headers: headers });
              return this.http.post(this.getUrl, body, options )
              .map(res =>  res.json())
          }
}
