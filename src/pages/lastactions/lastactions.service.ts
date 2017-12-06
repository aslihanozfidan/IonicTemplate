import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
//import { Observable } from 'rxjs/Observable';

import { Token } from '../login/token';

@Injectable()
export class LastActionsService {
    getUrl = "http://192.168.1.52:8080/GoodMinersAPI/rest/cointransactions/getLastActionsWithLabel/";
    id = Token.getNesne().getUserId();
    token = Token.getNesne().getToken();

    constructor(private http: Http) {}


    getLastActions() {
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
        let options = new RequestOptions({ headers: headers });
        return this.http.get(this.getUrl + this.id, options)
            .map(res => {
                let data = res.json();
                return data;
            });
    }
}
