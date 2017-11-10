import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { HttpClientService } from './httpclient.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
    getUrl = "http://192.168.1.153:8080/WebApplication4/rest/rest.users/token";
    constructor(private http: Http,
                private httpTokened: HttpClient) {}


    login(email: String, password: String) {
      return this.http.post(this.getUrl, { email: email, password: password }, {'responseType':'json'})
        .map(this.extractData)
        .catch(this.handleError);
      }



}
