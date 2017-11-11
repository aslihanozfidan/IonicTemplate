import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthService {
    getUrl = "http://192.168.1.153:8080/WebApplication4/rest/rest.users/token/";
    constructor(private http: Http) {}


    login(email, password) {
      return this.http.get(this.getUrl + email + "/" + password)
          .map(res => {
              let data = res.json();
              return data;
          });
    }

    


}
