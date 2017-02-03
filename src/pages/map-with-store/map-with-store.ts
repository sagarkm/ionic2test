import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { GoogleMaps } from '../../providers/google-maps';
import { GoogleMapsCluster } from '../../providers/google-maps-cluster';
import { ListWithStorePage } from '../list-with-store/list-with-store';

@Component({
  selector: 'page-map-with-store',
  templateUrl: 'map-with-store.html'
})
export class MapWithStorePage {
  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('pleaseConnect') pleaseConnect: ElementRef;

  constructor(public navCtrl: NavController, public platform: Platform, public maps: GoogleMaps, public mapCluster: GoogleMapsCluster) {

  }

  ionViewDidLoad(): void {

    this.platform.ready().then(() => {

      let mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement).then((map) => {
        this.mapCluster.addCluster(map);
      });

    });

  }

  tolistwithStores(){
    this.navCtrl.push(ListWithStorePage);
  }
}
