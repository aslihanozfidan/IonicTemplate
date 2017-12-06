import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { ChartsModule } from 'ng2-charts';

import { MyApp } from './app.component';

import { AccountPage } from '../pages/account/account';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { LoginPage } from '../pages/login/login';
import { ForgotPasswordPage } from '../pages/forgotpassword/forgotpassword';
import { ForgotPasswordCodePage } from '../pages/forgotpassword/forgotpasswordcode/forgotpasswordcode';
import { ChangePasswordPage } from '../pages/changepassword/changepassword';
import { InformationPage } from '../pages/information/information';
import { WalletSettingsPage } from '../pages/walletsettings/walletsettings';
import { WalletPage } from '../pages/wallet/wallet';
import { AddWalletPage } from '../pages/addwallet/addwallet';
import { LastActionsPage } from '../pages/lastactions/lastactions';
import { ReportsPage } from '../pages/reports/reports';
import { NotificationsPage } from '../pages/notifications/notifications';
import { InvoicesPage } from '../pages/invoices/invoices';
import { PhoneVerifyPage } from '../pages/phoneverify/phoneverify';
import { TabsPage } from '../pages/tabs/tabs';
import { LoadingPage } from '../pages/loading/loading';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DashboardService } from '../pages/dashboard/dashboard.service';
import { WalletService } from '../pages/wallet/wallet.service';
import { InformationService } from '../pages/information/information.service';
import { ChangePasswordService } from '../pages/changepassword/changepassword.service';
import { ForgotPasswordService } from '../pages/forgotpassword/forgotpassword.service';
import { ForgotPasswordCodeService } from '../pages/forgotpassword/forgotpasswordcode/forgotpasswordcode.service';
import { WalletSettingsService } from '../pages/walletsettings/walletsettings.service';
import { AddWalletService } from '../pages/addwallet/addwallet.service';
import { LastActionsService } from '../pages/lastactions/lastactions.service';
import { ReportsService } from '../pages/reports/reports.service';
import { NotificationsService } from '../pages/notifications/notifications.service';
import { InvoicesService } from '../pages/invoices/invoices.service';
import { PhoneVerifyService } from '../pages/phoneverify/phoneverify.service';
import { LoginService } from '../pages/login/login.service';
import { TabsService } from '../pages/tabs/tabs.service';

import { AuthService } from '../pages/auth/auth.service';

@NgModule({
  declarations: [
    MyApp,
    DashboardPage,
    AccountPage,
    TabsPage,
    LoginPage,
    ForgotPasswordPage,
    ForgotPasswordCodePage,
    ChangePasswordPage,
    WalletSettingsPage,
    AddWalletPage,
    WalletPage,
    LastActionsPage,
    ReportsPage,
    NotificationsPage,
    InvoicesPage,
    PhoneVerifyPage,
    InformationPage,
    LoadingPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    ChartsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DashboardPage,
    AccountPage,
    TabsPage,
    LoginPage,
    ForgotPasswordPage,
    ForgotPasswordCodePage,
    ChangePasswordPage,
    WalletSettingsPage,
    WalletPage,
    LastActionsPage,
    ReportsPage,
    NotificationsPage,
    InvoicesPage,
    PhoneVerifyPage,
    AddWalletPage,
    InformationPage,
    LoadingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DashboardService,
    WalletService,
    AddWalletService,
    InformationService,
    ChangePasswordService,
    ForgotPasswordService,
    ForgotPasswordCodeService,
    WalletSettingsService,
    LastActionsService,
    ReportsService,
    NotificationsService,
    InvoicesService,
    PhoneVerifyService,
    LoginService,
    TabsService,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
