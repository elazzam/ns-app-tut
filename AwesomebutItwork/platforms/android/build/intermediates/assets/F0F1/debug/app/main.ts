import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { NativeScriptModule } 		   from "nativescript-angular/nativescript.module";
import { NgModule }					   from "@angular/core";
import { NativeScriptRouterModule }    from "nativescript-angular/router";

//import { AppComponentModule } from "./app.module";
import { AppComponent } from "./app.component";
import { appComponents , appRoutes } from "./app.routing";
import { Data } from "./providers/data/data";


@NgModule({
	declarations: [AppComponent, ...appComponents],
	bootstrap: [AppComponent],
	imports: [
		NativeScriptModule,
		NativeScriptRouterModule,
		NativeScriptRouterModule.forRoot(appRoutes)
			
	],
	providers: [Data]
})

class AppComponentModule {}
platformNativeScriptDynamic().bootstrapModule(AppComponentModule);
