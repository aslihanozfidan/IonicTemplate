import { Component, OnInit, ViewChild  } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { LoadingPage } from '../pages/loading/loading';

import { Token } from '../pages/login/token';
//import { TabsService } from '../pages/tabs/tabs.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {
  @ViewChild('nav') nav: NavController;
  rootPage: any;
  isLogin: boolean;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  ngOnInit() {
    //console.log("Token ="+ Token.getNesne().getToken());
    //Token.getNesne().getToken();
    if (Token.getNesne().getToken() !== undefined) {
      this.rootPage = TabsPage;
    } else {
      this.rootPage = LoginPage;
      console.log("isLogin" + this.isLogin);
    }
    this.nav.push(LoadingPage);

 }

}
