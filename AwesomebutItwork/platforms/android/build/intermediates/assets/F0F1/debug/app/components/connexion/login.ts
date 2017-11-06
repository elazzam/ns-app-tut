import { Component } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router"; 
import { Data } from "../../providers/data/data";

@Component({
  selector: "login",
  templateUrl: './components/connexion/login.html',
})
export class LoginComponent {
	public constructor(private router:Router,private data: Data) {
		
	}
  public onTap() {
  		this.router.navigate(["home","abdeslam elazzam"]);
  }
  
  public onTap2() {
  		let navigationExtras : NavigationExtras = {
//  		queryParams : {
//  			"firstname":"Abdeslam",
//  			"lastname":"El azzam"
//  		}
			queryParams : {
  				"person": JSON.stringify({
  					"firstname":"Abdeslam",
  					"lastname":"El azzam",
  					"address": {
  						"city" : "Nice",
  						"country" : "France"
  					}
  					})
  			}
  		}
  		this.data.storage = 
  		this.router.navigate(["page1"],navigationExtras);
  }
  
    public onTap3() {
  		
  		this.data.storage = {
  			"firstname":"Abdeslam",
  			"lastname":"El azzam",
  			"address": {
  				"city" : "Nice",
  				"country" : "France"
  			}
  		};
  		this.router.navigate(["page2"]);
  }
  
      public onTap4() {
  		this.router.navigate(["databasecheck"]);
  }
}
