"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var router_1 = require("nativescript-angular/router");
var app_routing_1 = require("./app.routing");
var database_service_1 = require("./services/database.service");
var app_component_1 = require("./app.component");
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
            providers: [
                database_service_1.DatabaseService
            ]
        })
    ], AppComponentModule);
    return AppComponentModule;
}());
exports.AppComponentModule = AppComponentModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsZ0ZBQThFO0FBQzlFLHNEQUF1RTtBQUN2RSw2Q0FBMEQ7QUFDMUQsZ0VBQThEO0FBRTlELGlEQUErQztBQWdCL0M7SUFBQTtJQUFpQyxDQUFDO0lBQXJCLGtCQUFrQjtRQWQ5QixlQUFRLENBQUM7WUFDVCxZQUFZLEdBQUcsNEJBQVksU0FBSywyQkFBYSxDQUFDO1lBQzlDLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7WUFDekIsT0FBTyxFQUFFO2dCQUNSLHdDQUFrQjtnQkFDbEIsaUNBQXdCO2dCQUN4QixpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsdUJBQVMsQ0FBQzthQUUzQztZQUNELFNBQVMsRUFBRTtnQkFDVixrQ0FBZTthQUNmO1NBQ0QsQ0FBQztPQUVXLGtCQUFrQixDQUFHO0lBQUQseUJBQUM7Q0FBQSxBQUFsQyxJQUFrQztBQUFyQixnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgYXBwQ29tcG9uZW50cyAsIGFwcFJvdXRlcyB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5pbXBvcnQgeyBEYXRhYmFzZVNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9kYXRhYmFzZS5zZXJ2aWNlXCI7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcblx0ZGVjbGFyYXRpb25zOiBbQXBwQ29tcG9uZW50LCAuLi5hcHBDb21wb25lbnRzXSxcblx0Ym9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcblx0aW1wb3J0czogW1xuXHRcdE5hdGl2ZVNjcmlwdE1vZHVsZSxcblx0XHROYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXG5cdFx0TmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3QoYXBwUm91dGVzKVxuXHRcdFx0XG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdERhdGFiYXNlU2VydmljZVxuXHRdXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50TW9kdWxlIHt9XG4iXX0=