import { RegisterPage } from './../pages/register/register';


import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import * as firebase from 'firebase';
import { firebaseConfig } from './app.firebase.config';
import { ProfileViewPage } from '../pages/profile-view/profile-view';
import { MessagesPage } from '../pages/messages/messages';
import { HelpPage } from '../pages/help/help';
import { FeedbackPage } from '../pages/feedback/feedback';
import { SharePage } from '../pages/share/share';
import { VersionPage } from '../pages/version/version';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage
  ;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    firebase.initializeApp(firebaseConfig);
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'View profile', component: ProfileViewPage },
      { title: 'Messages', component: MessagesPage },
      { title: 'Help', component: HelpPage },
      { title: 'Feedback', component: FeedbackPage},
      { title: 'Share', component: SharePage },
      { title: 'Version', component: VersionPage },
      { title: 'Signout', component: HomePage }
   /*    { title: 'List', component: ListPage } */
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.rootPage = HomePage;
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
