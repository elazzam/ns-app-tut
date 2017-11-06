"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_1 = require("nativescript-angular/platform");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
//import { AppComponentModule } from "./app.module";
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var connexion_1 = require("./components/connexion/connexion");
var data_1 = require("./providers/data/data");
var forms_1 = require("nativescript-angular/forms");
var AppComponentModule = (function () {
    function AppComponentModule() {
    }
    AppComponentModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent].concat(app_routing_1.appComponents, [connexion_1.LoginComponent]),
            bootstrap: [app_component_1.AppComponent],
            imports: [
                nativescript_module_1.NativeScriptModule,
                router_1.NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forRoot(app_routing_1.appRoutes),
                forms_1.NativeScriptFormsModule
            ],
            providers: [data_1.Data]
        })
    ], AppComponentModule);
    return AppComponentModule;
}());
platform_1.platformNativeScriptDynamic().bootstrapModule(AppComponentModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwREFBNEU7QUFDNUUsZ0ZBQW1GO0FBQ25GLHNDQUFnRDtBQUNoRCxzREFBMEU7QUFFMUUsb0RBQW9EO0FBQ3BELGlEQUErQztBQUMvQyw2Q0FBMEQ7QUFDMUQsOERBQWtFO0FBQ2xFLDhDQUE2QztBQUM3QyxvREFBcUU7QUFnQnJFO0lBQUE7SUFBMEIsQ0FBQztJQUFyQixrQkFBa0I7UUFidkIsZUFBUSxDQUFDO1lBQ1QsWUFBWSxHQUFHLDRCQUFZLFNBQUssMkJBQWEsR0FBQywwQkFBYyxFQUFDO1lBQzdELFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7WUFDekIsT0FBTyxFQUFFO2dCQUNSLHdDQUFrQjtnQkFDbEIsaUNBQXdCO2dCQUN4QixpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsdUJBQVMsQ0FBQztnQkFDekMsK0JBQXVCO2FBRXpCO1lBQ0QsU0FBUyxFQUFFLENBQUMsV0FBSSxDQUFDO1NBQ2pCLENBQUM7T0FFSSxrQkFBa0IsQ0FBRztJQUFELHlCQUFDO0NBQUEsQUFBM0IsSUFBMkI7QUFDM0Isc0NBQTJCLEVBQUUsQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gXHRcdCAgIGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOZ01vZHVsZSB9XHRcdFx0XHRcdCAgIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSAgICBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbi8vaW1wb3J0IHsgQXBwQ29tcG9uZW50TW9kdWxlIH0gZnJvbSBcIi4vYXBwLm1vZHVsZVwiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgYXBwQ29tcG9uZW50cyAsIGFwcFJvdXRlcyB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jb25uZXhpb24vY29ubmV4aW9uJztcbmltcG9ydCB7IERhdGEgfSBmcm9tIFwiLi9wcm92aWRlcnMvZGF0YS9kYXRhXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zJztcblxuXG5ATmdNb2R1bGUoe1xuXHRkZWNsYXJhdGlvbnM6IFtBcHBDb21wb25lbnQsIC4uLmFwcENvbXBvbmVudHMsTG9naW5Db21wb25lbnRdLFxuXHRib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuXHRpbXBvcnRzOiBbXG5cdFx0TmF0aXZlU2NyaXB0TW9kdWxlLFxuXHRcdE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcblx0XHROYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChhcHBSb3V0ZXMpLFxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIFxuXHRcdFx0XG5cdF0sXG5cdHByb3ZpZGVyczogW0RhdGFdXG59KVxuXG5jbGFzcyBBcHBDb21wb25lbnRNb2R1bGUge31cbnBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBDb21wb25lbnRNb2R1bGUpO1xuIl19