import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
//import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {
    getUrl = "http://192.168.1.153:8080/WebApplication4/rest/user/token";
    id = "1";
    constructor(private http: Http) {}
}
