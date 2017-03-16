import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
 
export class GetService {  
    countryselect: any;
    static get parameters() {
        return [[Http]];
        
    }
 
	constructor(private http:Http) {
        
		
	}

//  GetCountry(value) {
//         var url = 'http://app.gettalent.in:3000/api/' + encodeURI(value);
//         var response = this.http.get(url).map(res => res.json());
// 		return response;
//     }

    GetCountry(){
    this.http.get('http://app.gettalent.in:3000/api/getcountry')
    .map(res => res.json()).subscribe(data => {
        this.countryselect = data;
        console.log(JSON.stringify(this.countryselect) + "This is Services");
    });
    }

}