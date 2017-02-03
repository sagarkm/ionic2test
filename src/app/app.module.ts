import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { MapWithStorePage } from '../pages/map-with-store/map-with-store';
import { ListWithStorePage } from '../pages/list-with-store/list-with-store';
import { GoogleMaps } from '../providers/google-maps';
import { GoogleMapsCluster } from '../providers/google-maps-cluster';
import { Connectivity } from '../providers/connectivity';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    MapWithStorePage,
    ListWithStorePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    MapWithStorePage,
    ListWithStorePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, GoogleMaps, GoogleMapsCluster, Connectivity]
})
export class AppModule {}
