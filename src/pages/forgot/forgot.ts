import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the Forgot page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-forgot',
  templateUrl: 'forgot.html'
})
export class ForgotPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPage');
  }
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Reset Your Password',
      subTitle: 'Please check your email and verify account!',
      buttons: ['OK']
    });
    alert.present();
  }
  forgot_data = {};
  forgotForm(){
    console.log(this.forgot_data);
  
  }

}
