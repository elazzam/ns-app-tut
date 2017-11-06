import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { NativeScriptModule } 		   from "nativescript-angular/nativescript.module";
import { NgModule }					   from "@angular/core";
import { NativeScriptRouterModule }    from "nativescript-angular/router";

//import { AppComponentModule } from "./app.module";
import { AppComponent } from "./app.component";
import { appComponents , appRoutes } from "./app.routing";
import { LoginComponent } from './components/connexion/connexion';
import { Data } from "./providers/data/data";
import { NativeScriptFormsModule } from 'nativescript-angular/forms';


@NgModule({
	declarations: [AppComponent, ...appComponents,LoginComponent],
	bootstrap: [AppComponent],
	imports: [
		NativeScriptModule,
		NativeScriptRouterModule,
		NativeScriptRouterModule.forRoot(appRoutes),
    NativeScriptFormsModule 
			
	],
	providers: [Data]
})

class AppComponentModule {}
platformNativeScriptDynamic().bootstrapModule(AppComponentModule);
