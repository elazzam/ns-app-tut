import { LawlaComponent } from "./components/lawla/lawla";
import { HomeComponent } from "./components/home/home";
import { Page1Component } from "./components/page1/page1";
import { Page2Component } from "./components/page2/page2";
import { CameraComponent } from "./components/picture/camera";
import { AddContactComponent } from './components/testdb/add-contact/add-contact';
import { UpdateContactComponent } from './components/testdb/update-contact/update-contact';
import { Page3Component } from "./components/testdb/page3";
import { LoginComponent } from "./components/connexion/connexion";

export const appRoutes: any = [
  { path : "", component : LoginComponent },
	{ path : "lawla", component : LawlaComponent },
	{ path : "home/:name", component : HomeComponent },
	{ path : "page1", component : Page1Component },
	{ path : "page2", component : Page2Component },
	{ path : "camera", component : CameraComponent },
	{ path : "databasecheck", component : Page3Component },
  { path : "addcontact", component : AddContactComponent },
  { path : "updatecontact", component : UpdateContactComponent }
  
  
	
];

export const appComponents: any = [
	LawlaComponent,
	HomeComponent,
	Page1Component,
	Page2Component,
	CameraComponent,
	Page3Component,
  AddContactComponent,
  UpdateContactComponent,
  LoginComponent
];

