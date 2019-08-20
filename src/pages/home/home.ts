import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoogleMaps, GoogleMap, Environment } from '@ionic-native/google-maps';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 // map: GoogleMap;
  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad() {
    //this.loadMap();
  }

  // loadMap() {
  //   // This code is necessary for browser
  //   Environment.setEnv({
  //     'API_KEY_FOR_BROWSER_RELEASE': '(your api key for `https://`)',
  //     'API_KEY_FOR_BROWSER_DEBUG': '(your api key for `http://`)'
  //   });

  //   // let mapOptions: GoogleMapOptions = {
  //   //   camera: {
  //   //      target: {
  //   //        lat: 43.0741904,
  //   //        lng: -89.3809802
  //   //      },
  //   //      zoom: 18,
  //   //      tilt: 30
  //   //    }
  //   // };

  //   this.map = GoogleMaps.create('map_canvas');
  // }
}
