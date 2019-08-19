import { BuilderInfoPage } from './../pages/builder-info/builder-info';
import { AccountSetupPage } from './../pages/account-setup/account-setup';
import { RegisterPage } from './../pages/register/register';
import { OnboardingPage } from './../pages/onboarding/onboarding';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
<<<<<<< HEAD
<<<<<<< HEAD
import { UserProvider } from '../providers/user/user';
=======
import { QuotationFormPage } from '../pages/quotation-form/quotation-form';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
>>>>>>> e0555f1644f8485b96c2d079671fd503cd458b08
=======
import { QuotationFormPage } from '../pages/quotation-form/quotation-form';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
>>>>>>> e0555f1644f8485b96c2d079671fd503cd458b08

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    OnboardingPage,
    AccountSetupPage,
    BuilderInfoPage,
    QuotationFormPage,
    ForgotPasswordPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    OnboardingPage,
    AccountSetupPage,
    BuilderInfoPage,
    QuotationFormPage,
    ForgotPasswordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider
  ]
})
export class AppModule {}
