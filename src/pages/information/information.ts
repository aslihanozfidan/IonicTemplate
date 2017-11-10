import { Component, ngOnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { InformationService } from './information.service';

@Component({
  selector: 'page-information',
  templateUrl: 'information.html'
})
export class InformationPage implements OnInit {
  userData: Array<string> = {};

  constructor(public navCtrl: NavController,
              public toastCtrl: ToastController,
              private informationService: InformationService) {}

  ngOnInit(): void {
    this.informationService.getUserInformation()
      .subscribe(val => {
        this.userData.id = val.id;
        this.userData.firstname = val.firstname;
        this.userData.email = val.email;
        this.userData.phone = val.phone;
        this.userData.UTh = val.UTh;
        this.userData.insertAt = val.insertAt;
        console.log(this.userData);
      });
  }
/*  getUserInformation(event, field) {
    this.userData.field = event.target.value;
    console.log(this.userData.field);
    console.log(this.userData);
  }*/
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
