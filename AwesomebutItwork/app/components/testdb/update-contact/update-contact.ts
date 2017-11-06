import { Component } from "@angular/core";
import { Address } from "../../../model/address.model";
import { DatabaseService } from "../../../services/database.service";
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: "update-contact",
  moduleId: module.id,
  templateUrl: "./update-contact.html",
  providers:[DatabaseService]
})
export class UpdateContactComponent {
  address:Address;
  constructor(private databaseService: DatabaseService,private nav:RouterExtensions,private route:ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.address = JSON.parse(params["addr"]);
    })
  }
    
  public updateContact() {
    if (this.address.username !== '' && this.address.number !== '') {
      this.databaseService.update(this.address).then((res:any) => {
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
