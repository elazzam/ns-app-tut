import { Component } from "@angular/core";
import { Address } from "../../../model/address.model";
import { DatabaseService } from "../../../services/database.service";
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: "add-contact",
  moduleId: module.id,
  templateUrl: "add-contact.html",
  providers:[DatabaseService]
})
export class AddContactComponent {
  address:Address;
  constructor(private databaseService: DatabaseService,private nav:RouterExtensions) {
    this.address = {
      username: '',
      number: ''
    }
  }
    
  public saveContact() {
    if (this.address.username !== '' && this.address.number !== '') {
      this.databaseService.insert(this.address).then((res:any) => {
        this.nav.navigate(['/databasecheck'],{clearHistory:true})
      });
    } else {
     alert("hadachi li dakhalti machi howa hadak ");
    }
  }
  
  public cancel() {
    this.nav.navigate(['/databasecheck'],{clearHistory:true});
  }
}
