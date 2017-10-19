import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';

import { AccountPage } from '../pages/account/account';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { LoginPage } from '../pages/login/login';
import { ForgotPasswordPage } from '../pages/forgotpassword/forgotpassword';
import { ChangePasswordPage } from '../pages/changepassword/changepassword';
import { InformationPage } from '../pages/information/information';
import { WalletSettingsPage } from '../pages/walletsettings/walletsettings';
import { WalletPage } from '../pages/wallet/wallet';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DashboardService } from '../pages/dashboard/dashboard.service';


@NgModule({
  declarations: [
    MyApp,
    DashboardPage,
    AccountPage,
    TabsPage,
    LoginPage,
    ForgotPasswordPage,
    ChangePasswordPage,
    WalletSettingsPage,
    WalletPage,
    InformationPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
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
    ChangePasswordPage,
    WalletSettingsPage,
    WalletPage,
    InformationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DashboardService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
