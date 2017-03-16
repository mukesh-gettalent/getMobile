import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder,FormGroup , Validators } from '@angular/forms'; //FormBuilder,   
import { matchingPasswords } from '../validators/customValidators';
// import { passwordPattern} from '../validators/customValidators';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
// import { GetService } from '../service/get-service'; 
/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  countryselect: any;
   stateselect:any;
   state:any;
   selectcity:any;
  type;
brand;
brands = [];
authForm : FormGroup;
  constructor(public http: Http,public navCtrl: NavController, public navParams: NavParams, fb: FormBuilder) {

    // Get Country 
    this.http.get('http://app.gettalent.in:3000/api/getcountry')
    .map(res => res.json()).subscribe(data => {
        this.countryselect = data;
    });
      // Get state
       this.http.get('http://app.gettalent.in:3000/api/getstate')
    .map(res => res.json()).subscribe(data => {
        this.stateselect = data;
    });
    // Get city
           this.http.get('http://app.gettalent.in:3000/api/getcity')
    .map(res => res.json()).subscribe(data => {
        this.selectcity = data;
    });

    this.authForm = fb.group({
		  'username' : [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      'email' : [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
		  'password': [null, Validators.compose([Validators.required, Validators.minLength(8)])],
      'confirm_password': [null, Validators.compose([Validators.required, Validators.minLength(8)])],
      'mob_no' : [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
		  'select_role': 'role',
       'company_name' : [null, Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(100)])],
       'company_web' : [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
       'primary_cont':'primary cont',
      'pan_no' : [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
      'tin_no' : [null, Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(11)])],
      'gst_no' : [null, Validators.compose([Validators.required, Validators.minLength(15), Validators.maxLength(15)])],
      'country':'select_country',
      'state' : 'select_state',
      'city' : 'select_city'
    },{validator: matchingPasswords('password', 'confirm_password')})
  }

submitForm(value: any):void{
		console.log('Form submited!')
		console.log(value);
	}	

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  //Register Part 
  currentRolename;
  onSelectedRole(selectedvalues:any){
    
   let selectedvalue:any = selectedvalues;
  //  return selectedvalue = selectedvalues;
   console.log("  qeq  " + selectedvalue);
    if(selectedvalues == 'client'){
      this.currentRolename = selectedvalue;
 console.log( selectedvalues + "Role Client");
     this.brands = ['BMW', 'Benz'];
    }else if(selectedvalues == 'partner'){
      this.currentRolename = selectedvalue;
 console.log( selectedvalues + "Role partner");
    }else if(selectedvalues == 'service_provider'){
      this.currentRolename = selectedvalue;
 console.log( selectedvalues + "service_provider");
    }else if(selectedvalues == 'interviewer'){
      this.currentRolename = selectedvalue;
 console.log( selectedvalues + "interviewer");
    }else {
      this.brands = [];
      this.brand = "";
       this.currentRolename = "";
    }
  }
  SelectedRolevalue(rolevalue){
    console.log(rolevalue + "  Role Values");
  }
roleSelect:any = [
  {id: 1, name: 'client' ,value: "Client"},
  {id: 2, name: 'partner',value: "Partner"},
  {id: 3, name: 'service_provider',value: "Service Provider"},
  {id: 4, name: 'interviewer',value: "Interviewer"},
  // {id: 5, name: 'candidate', value: "Candidate"},
]
countcompany:any = ["Talent Capital india pvt ltd","TCS","CSC"];

itemseleted:any = [] ;
showSelectValue = function(mySelect) {
  this.itemselected.push(mySelect);
}
  }