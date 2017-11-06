import { Component } from "@angular/core";
import { Address } from "../../model/address.model";
import { DatabaseService } from "../../services/database.service";

@Component({
  selector: "page3",
  moduleId: module.id,
  templateUrl: './components/testdb/page3.html',
})
export class Page3Component {

	public listAddressBook: Address[];
	
	constructor(private databaseService: DatabaseService) {
		this.databaseService.selectAll().then((res:any) => {
			this.listAddressBook = res;
		})
	}
		
}
