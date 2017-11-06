"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_1 = require("nativescript-angular/platform");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
//import { AppComponentModule } from "./app.module";
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var data_1 = require("./providers/data/data");
var AppComponentModule = (function () {
    function AppComponentModule() {
    }
    AppComponentModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent].concat(app_routing_1.appComponents),
            bootstrap: [app_component_1.AppComponent],
            imports: [
                nativescript_module_1.NativeScriptModule,
                router_1.NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forRoot(app_routing_1.appRoutes)
            ],
            providers: [data_1.Data]
        })
    ], AppComponentModule);
    return AppComponentModule;
}());
platform_1.platformNativeScriptDynamic().bootstrapModule(AppComponentModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwREFBNEU7QUFDNUUsZ0ZBQW1GO0FBQ25GLHNDQUFnRDtBQUNoRCxzREFBMEU7QUFFMUUsb0RBQW9EO0FBQ3BELGlEQUErQztBQUMvQyw2Q0FBMEQ7QUFDMUQsOENBQTZDO0FBZTdDO0lBQUE7SUFBMEIsQ0FBQztJQUFyQixrQkFBa0I7UUFadkIsZUFBUSxDQUFDO1lBQ1QsWUFBWSxHQUFHLDRCQUFZLFNBQUssMkJBQWEsQ0FBQztZQUM5QyxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1lBQ3pCLE9BQU8sRUFBRTtnQkFDUix3Q0FBa0I7Z0JBQ2xCLGlDQUF3QjtnQkFDeEIsaUNBQXdCLENBQUMsT0FBTyxDQUFDLHVCQUFTLENBQUM7YUFFM0M7WUFDRCxTQUFTLEVBQUUsQ0FBQyxXQUFJLENBQUM7U0FDakIsQ0FBQztPQUVJLGtCQUFrQixDQUFHO0lBQUQseUJBQUM7Q0FBQSxBQUEzQixJQUEyQjtBQUMzQixzQ0FBMkIsRUFBRSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBcdFx0ICAgZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IE5nTW9kdWxlIH1cdFx0XHRcdFx0ICAgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9ICAgIGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuLy9pbXBvcnQgeyBBcHBDb21wb25lbnRNb2R1bGUgfSBmcm9tIFwiLi9hcHAubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBhcHBDb21wb25lbnRzICwgYXBwUm91dGVzIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcbmltcG9ydCB7IERhdGEgfSBmcm9tIFwiLi9wcm92aWRlcnMvZGF0YS9kYXRhXCI7XG5cblxuQE5nTW9kdWxlKHtcblx0ZGVjbGFyYXRpb25zOiBbQXBwQ29tcG9uZW50LCAuLi5hcHBDb21wb25lbnRzXSxcblx0Ym9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcblx0aW1wb3J0czogW1xuXHRcdE5hdGl2ZVNjcmlwdE1vZHVsZSxcblx0XHROYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXG5cdFx0TmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3QoYXBwUm91dGVzKVxuXHRcdFx0XG5cdF0sXG5cdHByb3ZpZGVyczogW0RhdGFdXG59KVxuXG5jbGFzcyBBcHBDb21wb25lbnRNb2R1bGUge31cbnBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBDb21wb25lbnRNb2R1bGUpO1xuIl19