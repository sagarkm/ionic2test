import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { MapWithStorePage } from '../map-with-store/map-with-store';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {

  }
  loginUser() {
    this.navCtrl.setRoot(MapWithStorePage);
  }
}
