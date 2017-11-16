import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { InformationService } from './information.service';
import { Token } from '../login/token';

@Component({
    selector: 'page-information',
    templateUrl: 'information.html'
})
export class InformationPage implements OnInit {

    userName: string;
    email: string;
    phone: string;

    constructor(public navCtrl: NavController,
                public toastCtrl: ToastController,
                private informationService: InformationService) {}

    ngOnInit(): void {
        this.userName = Token.getNesne().getUserName();
        this.email = Token.getNesne().getEmail();
        this.phone = Token.getNesne().getPhone();
    }

    updateUserInformation() {
      //POST event.target.id
    }

    changeInformationToast() {
        const toastInfo = this.toastCtrl.create({
            message: 'Information was changed.',
            duration: 3000,
            position: 'top'
        });

        toastInfo.onDidDismiss(() => {
            console.log('Dismissed toast');
        });

        toastInfo.present();
      }
}
