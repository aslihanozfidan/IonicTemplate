import { Component } from '@angular/core';
import { NavController, LoadingController  } from 'ionic-angular';


@Component({
    selector: 'page-loading',
    templateUrl: 'loading.html'
})
export class LoadingPage {
  
    showRoot = true;
    tab = document.querySelector('#tab');
    loadingRoot = LoadingPage;

    constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {}

}
