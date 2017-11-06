import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "login",
  templateUrl: './components/home/home.html',
})
export class HomeComponent {

	public fullname: string;
	
	public constructor(private route: ActivatedRoute) {
		this.route.params.subscribe((params) => {
			this.fullname = params["name"];
		});
	}
	
}
