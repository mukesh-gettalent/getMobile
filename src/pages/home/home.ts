import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ForgotPage } from '../forgot/forgot';
import { RegisterPage } from '../register/register';
import { PostService } from '../service/post-service';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers :[PostService]

})
export class HomePage {
movies:Array<any>;
authForm : FormGroup;

	constructor(public navCtrl: NavController, fb: FormBuilder, private PostService:PostService, public translate: TranslateService) {
	
  translate.addLangs(["en", "es"]);
    translate.setDefaultLang('en'); 
   
    let browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  
  	this.authForm = fb.group({
		  'email' : [null],
		  'password': [null],
		  'gender' : 'e'
		})  
	}
submitForm(value: any):void{
		console.log('Form submited!')
		console.log(value);
  }

  serchMovieDB(event, key){
    console.log(event.target.value);
    if(event.target.value.length > 2){
      this.PostService.searchMovies(event.target.value).subscribe(
        data => {
          this.movies = data.results;
          console.log(data) 
        },
        err => {
          console.log(err);
        },
        () =>console.log("Movies Search Completed")
      )
    }
  }

   todo = {}
  logForm() {
    console.log(this.todo)
  }

// regPage(){
  //   this.navCtrl.push(RegistrationPage);
  // }
  Goforgotpage(){
    console.log("Forgot Page");
    this.navCtrl.push(ForgotPage);
  }

  gonewRegister(){
    this.navCtrl.push(RegisterPage);
  }
}
