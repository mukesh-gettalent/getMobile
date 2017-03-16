import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HomePage } from '../pages/home/home';
import { ForgotPage } from '../pages/forgot/forgot';
import { RegisterPage } from '../pages/register/register';
import { TranslateModule , TranslateLoader ,TranslateStaticLoader} from 'ng2-translate/ng2-translate';  
import { Http } from '@angular/http';

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ForgotPage,
    RegisterPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    BrowserModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ForgotPage,
    RegisterPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
