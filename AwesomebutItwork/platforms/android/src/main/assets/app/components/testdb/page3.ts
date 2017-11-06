import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { Address } from "../../model/address.model";
import { DatabaseService } from "../../services/database.service";
import { NavigationExtras } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
var dialogs = require("ui/dialogs");

@Component({
  selector: "page3",
  moduleId: module.id,
  templateUrl: 'page3.html',
  providers:[DatabaseService],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Page3Component {

	public listAddressBook: Address[];
	
	constructor(private databaseService: DatabaseService, private nav: RouterExtensions) {
		this.databaseService.selectAll().then((res:any) => {
			this.listAddressBook = res;
		})
	}
  
  public addContact() {
    this.nav.navigate(['/addcontact']);
  }
		
  public selected(name,num) {
    let address: Address = {
      username:name,
      number : num
    }
    var that = this;
    let res = dialogs.confirm({
        title: "l3ibat",
        message: "m7it ola badlo",
        okButtonText: "Delete",
        cancelButtonText: "Update",
        neutralButtonText: "Cancel"
    }).then(result => {
        if (result == false){
          console.log(address.username)
          let navigationExtras : NavigationExtras = {
            queryParams : {
                "addr": JSON.stringify(address)
              }
           }
          that.nav.navigate(['/updatecontact'],navigationExtras)
        } else if (result){
          //m7i
          this.databaseService.remove(address).then(res => {
            this.databaseService.selectAll().then((res:any) => {
            this.listAddressBook = res;
          });
          })
          // TODO refresh the page and remove what it is already removed
          that.nav.navigate(["/databasecheck"],{clearHistory:false})
        }
    });
    

  }
}
