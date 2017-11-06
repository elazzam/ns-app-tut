import { Component } from "@angular/core";
import { Router } from "@angular/router"; 
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "page1",
  templateUrl: './components/page1/page1.html',
})
export class Page1Component {
	public person:any;
	//public firstname:string;
	//public lastname:string;

	public constructor(private router:Router, private route: ActivatedRoute) {
		this.route.queryParams.subscribe(params => {
			this.person = JSON.parse(params["person"]);
			console.log(params["person"]);
			//this.firstname = params["firstname"];
			//this.lastname = params["lastname"];
			
			
			
		})
	}
	
	public onTap() {
		this.router.navigate(["camera"]);
	}
	
}
