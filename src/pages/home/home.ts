import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import * as firebase from 'firebase';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private toastCtrl:ToastController) {

  }
  signout() {
    firebase.auth().signOut().then(res => {
      this.toastCtrl.create({
        message: 'Logout Successful.',
        duration: 3000
      }).present();
      this.navCtrl.setRoot(LoginPage);
    }).catch( err => {
      this.toastCtrl.create({
        message: err,
        duration: 3000
      }).present();
      //
    })
  }

}
