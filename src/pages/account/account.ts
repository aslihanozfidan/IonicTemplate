import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ChangePasswordPage } from '../changepassword/changepassword';
import { InformationPage } from '../information/information';
import { WalletSettingsPage } from '../walletsettings/walletsettings';
import { InvoicesPage } from '../invoices/invoices';

import { NotificationsPage } from '../notifications/notifications';

@Component({
    selector: 'page-account',
    templateUrl: 'account.html'
})
export class AccountPage {

    changePasswordRoot = ChangePasswordPage;
    informationRoot = InformationPage;
    walletSettingsRoot = WalletSettingsPage;
    invoicesRoot = InvoicesPage;
    notificationsRoot = NotificationsPage;
    constructor(public navCtrl: NavController) {}
}
