import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { NotificationsService } from './notifications.service';
import { Token } from '../login/token';

@Component({
    selector: 'page-notifications',
    templateUrl: 'notifications.html'
})
export class NotificationsPage implements OnInit {
    notifications = [];
    id = Token.getNesne().getUserId();
    constructor(public navCtrl: NavController,
                public toastCtrl: ToastController,
                private notificationsService: NotificationsService) {}
    getNotifications() {
        this.notificationsService.getNotifications()
          .subscribe(val => {
              console.log(val);
              this.notifications = val;
          });
    }
    ngOnInit(): void {
        this.getNotifications();
    }


    doRefresh(refresher) {
        console.log('Begin async operation', refresher);
        this.getNotifications();
        setTimeout(() => {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    }
}
