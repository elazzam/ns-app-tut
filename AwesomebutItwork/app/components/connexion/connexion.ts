import { Component } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router"; 
import { User } from "../../model/user.model";
import { USER } from "../../mock/user.mock";
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: "login",
  moduleId: module.id,
  templateUrl: 'connexion.html',
})
export class LoginComponent {
  public credentials:User;
  public constructor(private router:Router,private nav:RouterExtensions) {
    this.credentials = {
      username:'',
      password:''
    }
  }
  
  public login() {
    if(this.credentials.username === USER.username && this.credentials.password === USER.password){
      this.nav.navigate(['lawla'],{clearHistory:true}); // clear history to avoid back to login 
    } else {
      alert("oho username or password are not valid");
    }
  }

  
  
}
