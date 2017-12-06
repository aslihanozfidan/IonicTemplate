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

    modelNameSurname: string;
    modelEmailAdd: string;
    id = Token.getNesne().getUserId();
    userName: string;
    firstName: string;
    email: string;
    phone: string;
    errorValidate: boolean = false;
    succesValidate: boolean = false;
    statusText: string;

    constructor(public navCtrl: NavController,
                public toastCtrl: ToastController,
                private informationService: InformationService) {}

    ngOnInit(): void {
        this.userName = Token.getNesne().getUserName();
        this.firstName = Token.getNesne().getFirstName();
        this.email = Token.getNesne().getEmail();
        this.phone = Token.getNesne().getPhone();
        console.log(this.firstName);
    }

    updateUserInformation() {
      console.log(this.modelNameSurname + "  " + this.modelEmailAdd);
         this.informationService.postUpdateUserInformation(this.id, this.modelNameSurname, this.modelEmailAdd)
             .subscribe(
               res => {
                   console.log(res + " updateUserInformation için ok");
                   this.succesValidate = true;
                   this.errorValidate = false;
                   this.statusText = "Information was updated.";
                   Token.getNesne().setFirstName(this.modelNameSurname);
                   Token.getNesne().setEmail(this.modelEmailAdd);
                 },
               error => {
                   console.log(error + " updateUserInformation için error");
                   this.succesValidate = false;
                   this.errorValidate = true;
                   this.statusText = "The wallet was not deleted. Please try again.";
             });
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
