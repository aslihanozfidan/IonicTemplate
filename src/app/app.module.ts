import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

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
import { LoadingPage } from '../pages/loading/loading';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DashboardService } from '../pages/dashboard/dashboard.service';
import { WalletService } from '../pages/wallet/wallet.service';
import { InformationService } from '../pages/information/information.service';
import { ChangePasswordService } from '../pages/changepassword/changepassword.service';
import { WalletSettingsService } from '../pages/walletsettings/walletsettings.service';
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
    ChangePasswordPage,
    WalletSettingsPage,
    WalletPage,
    InformationPage,
    LoadingPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
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
    InformationPage,
    LoadingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DashboardService,
    WalletService,
    InformationService,
    ChangePasswordService,
    WalletSettingsService,
    LoginService,
    TabsService,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
