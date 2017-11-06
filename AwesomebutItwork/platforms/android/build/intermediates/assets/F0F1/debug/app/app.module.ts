import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { appComponents , appRoutes } from "./app.routing";
import { DatabaseService } from "./services/database.service";

import { AppComponent } from "./app.component";

@NgModule({
	declarations: [AppComponent, ...appComponents],
	bootstrap: [AppComponent],
	imports: [
		NativeScriptModule,
		NativeScriptRouterModule,
		NativeScriptRouterModule.forRoot(appRoutes)
			
	],
	providers: [
		DatabaseService
	]
})

export class AppComponentModule {}
