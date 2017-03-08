import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
import { HomePage } from '../pages/home/home';
import { RegistrationPage } from '../pages/registration/registration';
import { ForgotPage } from '../pages/forgot/forgot';
// import { EmailValidator } from '../pages/validators/email';
// import { EmailValidator } from '../pages/forgot/email';
// import { PasswordValidator } from '../pages/validators/password';
// import { PasswordValidator } from '../pages/forgot/password'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegistrationPage,
    ForgotPage
    // EmailValidator,
    // PasswordValidator
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    BrowserModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegistrationPage,
    ForgotPage
    // EmailValidator,
    // PasswordValidator
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
