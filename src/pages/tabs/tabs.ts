import { Component } from '@angular/core';

import { AccountPage } from '../account/account';
import { DashboardPage } from '../dashboard/dashboard';
import { LoginPage } from '../login/login';
import { WalletPage } from '../wallet/wallet';

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {

    dashboardRoot = DashboardPage;
    accountRoot = AccountPage;
    loginRoot = LoginPage;
    walletRoot = WalletPage;


    constructor() {}
}
