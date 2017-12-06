import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PhoneVerifyService } from './phoneverify.service';

import { Token } from '../login/token';

@Component({
    selector: 'page-phoneverify',
    templateUrl: 'phoneverify.html'
})
export class PhoneVerifyPage implements OnInit {
    id = Token.getNesne().getUserId();
    errorValidate: boolean = false;
    succesValidate: boolean = false;
    statusText: string;
    constructor(public navCtrl: NavController,
                private phoneVerifyService: PhoneVerifyService) {}

    sendMessageWithCode() {
        this.phoneVerifyService.sendMessageWithCode()
            .subscribe(
                val => {
                    console.log(JSON.stringify(val) + " GET sendMessageWithCode ok");
                },
                error => {
                    console.log(JSON.stringify(error) + " GET sendMessageWithCode error");
                });
     }

    ngOnInit() {
        this.sendMessageWithCode();
    }
}
