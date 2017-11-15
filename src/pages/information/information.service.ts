import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
//import { Observable } from 'rxjs/Observable';
import { Token } from '../login/token';
@Injectable()
export class InformationService {
    getUrl = "http://192.168.1.153:8080/WebApplication4/rest/";
    id = Token.getNesne().getUserId();
    constructor(private http: Http) {}

    public setAllBalance = (gainAmount) => {
      return gainAmount;
    };

}
