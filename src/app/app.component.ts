import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { LoginPage } from '../pages/login/login';
import { MapWithStorePage } from '../pages/map-with-store/map-with-store';
import { ListWithStorePage } from '../pages/list-with-store/list-with-store';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = LoginPage;
  pages: Array<{ title: string, component: any }>;
  constructor(platform: Platform) {
    this.pages = [
      { title: 'Store List', component: MapWithStorePage },
      { title: 'View on Map', component: ListWithStorePage }
    ];
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
