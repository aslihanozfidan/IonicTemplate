import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/map';
//import { Observable } from 'rxjs/Observable';

import { Token } from '../login/token';

@Injectable()
export class WalletService {
    address: string;
    amount: number;
    getUrl = "http://192.168.1.52:8080/GoodMinersAPI/rest/";
    id = Token.getNesne().getUserId();
    token = Token.getNesne().getToken();
    walletAddress: string;
    btcWalletAmount: number;
    constructor(private http: Http) {}

    public setAllBalance = (gainAmount) => {
      return gainAmount;
    };


  /*  getWallets() {
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
        let options = new RequestOptions({ headers: headers });
        return this.http.get(this.getUrl + 'wallets/' + this.id, options)
            .map(res => {
                let data = res.json();
                this.walletAddress = data.btcwallet;
                this.btcWalletAmount = data.btcamount;
                console.log(this.walletAddress + "  walletAddress");
                return data;
            });
    }*/

    getGmWallet() {
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
        let options = new RequestOptions({ headers: headers });
        return this.http.get(this.getUrl + 'wallets/getGmWalletAmount/' + this.id, options)
            .map(res => {
                let data = res.json();
                this.walletAddress = data.btcwallet;
                this.btcWalletAmount = data.btcamount;
                return data;
            });
    }

    getUnpaidEarning() {
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
        let options = new RequestOptions({ headers: headers });
        return this.http.get(this.getUrl + 'btcearning/unpaidearning/' + this.id, options)
            .map(res => {
                let data = res.json();
                console.log(data);
                return data;
            });
    }

    getLastActions() {
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
        let options = new RequestOptions({ headers: headers });
        return this.http.get(this.getUrl + 'cointransactions/' + this.id, options)
            .map(res => {
                let data = res.json();
                console.log(data);
                return data;
            });
    }

    getSavedWallets() {
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.token, 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.get(this.getUrl + 'savedwallets/getSavedWallets/' + this.id, options)
            .map(res => {
                let data = res.json();
                return data;
            });
    }

  /*  requestPayment(userId, btcAmount, walletAdress) {
         let body = { 'userId': userId, 'btcAmount': btcAmount, 'walletAdress': walletAdress };
         let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
         let options = new RequestOptions({ headers: headers });
         return this.http.post('http://192.168.1.52:8080/GoodMinersAPI/rest/wallets/btcAmountGainUpdate', body, options )
             .map(res =>  res.json())
   }*/

   coinTransaction(userId, walletAdressSender, walletAdressReceiver, btcAmount, senderWalletType, receiverWalletType) {
        let body = { 'userId': userId, 'walletAdressSender': walletAdressSender, 'walletAdressReceiver': walletAdressReceiver, 'btcAmount': btcAmount, 'walletTypeSender': senderWalletType, 'walletTypeReceiver': receiverWalletType };
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://192.168.1.52:8080/GoodMinersAPI/rest/cointransactions/coinTransaction', body, options )
            .map(res =>  res.json())
  }

  addGmWallet(userId) {
       let body = { 'userId': userId };
       let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
       let options = new RequestOptions({ headers: headers });
       return this.http.post('http://192.168.1.52:8080/GoodMinersAPI/rest/wallets/gmWalletAdd', body, options )
           .map(res => {
             let data = res.json();
             console.log(data);
             return data;
           });
 }

  getMonthlyEarning() {
      let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
      let options = new RequestOptions({ headers: headers });
      return this.http.get(this.getUrl + 'btcearning/monthlyEarning/' + this.id, options)
          .map(res => {
              let data = res.json();
              return data;
          });
  }
  getEarningByUserId() {
      let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
      let options = new RequestOptions({ headers: headers });
      return this.http.get(this.getUrl + 'btcearning/getEarningByuserId/' + this.id, options)
          .map(res => {
              let data = res.json();
              return data;
          });
  }
}
