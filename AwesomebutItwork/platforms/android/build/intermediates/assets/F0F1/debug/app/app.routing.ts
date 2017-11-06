import { LoginComponent } from "./components/connexion/login";
import { HomeComponent } from "./components/home/home";
import { Page1Component } from "./components/page1/page1";
import { Page2Component } from "./components/page2/page2";
import { CameraComponent } from "./components/picture/camera";
import { Page3Component } from "./components/testdb/page3";

export const appRoutes: any = [
	{ path : "", component : LoginComponent },
	{ path : "home/:name", component : HomeComponent },
	{ path : "page1", component : Page1Component },
	{ path : "page2", component : Page2Component },
	{ path : "camera", component : CameraComponent },
	{ path : "databasecheck", component : Page3Component }
	
];

export const appComponents: any = [
	LoginComponent,
	HomeComponent,
	Page1Component,
	Page2Component,
	CameraComponent,
	Page3Component 
];

