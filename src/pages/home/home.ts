import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';


import { RegistrationPage } from '../registration/registration';
import { ForgotPage } from '../forgot/forgot';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  type;
  brand;
  brands = [];
  constructor(public navCtrl: NavController) {
    
  }
   todo = {}
  logForm() {
    console.log(this.todo)
  }

  regPage(){
    this.navCtrl.push(RegistrationPage);
  }
  Goforgotpage(){
    console.log("Forgot Page");
    this.navCtrl.push(ForgotPage);
  }


  

}
