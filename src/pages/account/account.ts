import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ChangePasswordPage } from '../changepassword/changepassword';
import { InformationPage } from '../information/information';
import { WalletSettingsPage } from '../walletsettings/walletsettings';
@Component({
    selector: 'page-account',
    templateUrl: 'account.html'
})
export class AccountPage {

    changePasswordRoot = ChangePasswordPage;
    informationRoot = InformationPage;
    walletSettingsRoot = WalletSettingsPage;
    constructor(public navCtrl: NavController) {}
}
