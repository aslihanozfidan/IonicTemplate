import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { Token } from '../login/token';

@Injectable()
export class InvoicesService {
    getUrl = "http://192.168.1.52:8080/GoodMinersAPI/rest/";
    id = Token.getNesne().getUserId();
    token = Token.getNesne().getToken();
    constructor(private http: Http) {}

    getInvoices() {
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
        let options = new RequestOptions({ headers: headers });
        return this.http.get(this.getUrl + 'user/invoice/' + this.id, options)
            .map(res => {
                let data = res.json();
                return data;
            });
    }
}
