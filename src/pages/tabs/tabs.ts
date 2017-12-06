import { Component } from '@angular/core';

import { AccountPage } from '../account/account';
import { DashboardPage } from '../dashboard/dashboard';
import { LoginPage } from '../login/login';
import { WalletPage } from '../wallet/wallet';
import { LastActionsPage } from '../lastactions/lastactions';
import { ReportsPage } from '../reports/reports';

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {

    dashboardRoot = DashboardPage;
    accountRoot = AccountPage;
    loginRoot = LoginPage;
    walletRoot = WalletPage;
    lastActionsRoot = LastActionsPage;
    reportsRoot = ReportsPage;


    constructor() {}
}
