// provider aprouch

import { Component } from "@angular/core";
import { Data } from "../../providers/data/data";

@Component({
  selector: "page2",
  templateUrl: './components/page2/page2.html',
})
export class Page2Component {
	public person:any;

	public constructor(private data: Data) {
		this.person = this.data.storage;
	}
	

	
}
