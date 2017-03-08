import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

// import { FormsModule } from '@angular/forms';
// import { MyComponent } from 'my-component'
// import {FORM_DIRECTIVES, NgFor, Inject} from 'angular2/angular2';
// import {RouteParams} from 'angular2/router';

/*
  Generated class for the Registration page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})




export class RegistrationPage {
  // selected;
type;
brand;
brands = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //heckBoxValue:bool =false;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

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
    }else if(selectedvalues == 'candidate'){
      this.currentRolename = selectedvalue;
 console.log( selectedvalues + "candidate");
    }else {
      this.brands = [];
      this.brand = "";
       this.currentRolename = "";
    }
  }
  SelectedRolevalue(rolevalue){
    console.log(rolevalue + "  Role Values");
  }
countryselect:any = [
    {id: 1, name:'India'},
    {id: 2, name:'US'},
    {id: 5, name:'UK'}
   
]

roleSelect:any = [
  {id: 1, name: 'client' ,value: "Client"},
  {id: 2, name: 'partner',value: "Partner"},
  {id: 3, name: 'service_provider',value: "Service Provider"},
  {id: 4, name: 'interviewer',value: "Interviewer"},
  {id: 5, name: 'candidate', value: "Candidate"},
]


  //  countryselect:any = ["India","US","UK"];
   stateselect:any = ["Tamil Nadu","Karnataka","Kerala"];
   selectcity:any = ["Chennai","Bangalore","Kochi"];

reg = [];
registrationForm(){
  console.log(this.reg);
  console.log(this.itemseleted);
  this.reg.push(this.itemseleted);
  console.log(this.reg);
  // this.itemseleted = ' ';
  
}
// public itemseleteds:any=[];
// mySelect:any = this.countryselect[0].name;
itemseleted:any = [] ;
// itemseleted: itemseleteds[] = [];

showSelectValue = function(mySelect) {
  
    console.log("Select "  + mySelect);
     this.itemselected.push(mySelect);
}

countrySelected(SelectedValue){
console.log("Selected country  ", SelectedValue);
this.itemseleted.push(SelectedValue);
}
stateSelected(selectedstate){
  console.log("selected State  " + selectedstate);
this.itemseleted.push(selectedstate);
  
}
citySelected(selectedcity){
  console.log("selected city is " + selectedcity );
this.itemseleted.push(selectedcity);
  
}



}
