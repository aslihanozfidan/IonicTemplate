import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { Token } from '../login/token';

@Injectable()
export class ChangePasswordService {
    id = Token.getNesne().getUserId();
    token = Token.getNesne().getToken();
    constructor(private http: Http) {}

    changeUserPassword(userId, oldPassword, newPassword) {
        let body = JSON.stringify({ 'userId': userId, 'oldPassword': oldPassword, 'newPassword': newPassword });
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.token, 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://192.168.1.52:8080/GoodMinersAPI/rest/user/changePassword', body, options )
            .map(res =>  res.json())
     }
}
