import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the ListWithStore page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-list-with-store',
  templateUrl: 'list-with-store.html'
})
export class ListWithStorePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListWithStorePage');
  }
  tomapwithStores() {
    this.navCtrl.pop();
  }
}
