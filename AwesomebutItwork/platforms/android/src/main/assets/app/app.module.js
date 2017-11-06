"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var router_1 = require("nativescript-angular/router");
var app_routing_1 = require("./app.routing");
var database_service_1 = require("./services/database.service");
var app_component_1 = require("./app.component");
var forms_1 = require("nativescript-angular/forms");
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
                router_1.NativeScriptRouterModule.forRoot(app_routing_1.appRoutes),
                forms_1.NativeScriptFormsModule
            ],
            providers: [
                database_service_1.DatabaseService
            ]
        })
    ], AppComponentModule);
    return AppComponentModule;
}());
exports.AppComponentModule = AppComponentModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsZ0ZBQThFO0FBQzlFLHNEQUF1RTtBQUN2RSw2Q0FBMEQ7QUFDMUQsZ0VBQThEO0FBRTlELGlEQUErQztBQUUvQyxvREFBcUU7QUFpQnJFO0lBQUE7SUFBaUMsQ0FBQztJQUFyQixrQkFBa0I7UUFmOUIsZUFBUSxDQUFDO1lBQ1QsWUFBWSxHQUFHLDRCQUFZLFNBQUssMkJBQWEsQ0FBQztZQUM5QyxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1lBQ3pCLE9BQU8sRUFBRTtnQkFDUix3Q0FBa0I7Z0JBQ2xCLGlDQUF3QjtnQkFDeEIsaUNBQXdCLENBQUMsT0FBTyxDQUFDLHVCQUFTLENBQUM7Z0JBQ3pDLCtCQUF1QjthQUV6QjtZQUNELFNBQVMsRUFBRTtnQkFDVixrQ0FBZTthQUNmO1NBQ0QsQ0FBQztPQUVXLGtCQUFrQixDQUFHO0lBQUQseUJBQUM7Q0FBQSxBQUFsQyxJQUFrQztBQUFyQixnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgYXBwQ29tcG9uZW50cyAsIGFwcFJvdXRlcyB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5pbXBvcnQgeyBEYXRhYmFzZVNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9kYXRhYmFzZS5zZXJ2aWNlXCI7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFkZHJlc3MgfSBmcm9tICcuL21vZGVsL2FkZHJlc3MubW9kZWwnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtcyc7XG5cbkBOZ01vZHVsZSh7XG5cdGRlY2xhcmF0aW9uczogW0FwcENvbXBvbmVudCwgLi4uYXBwQ29tcG9uZW50c10sXG5cdGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXG5cdGltcG9ydHM6IFtcblx0XHROYXRpdmVTY3JpcHRNb2R1bGUsXG5cdFx0TmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxuXHRcdE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KGFwcFJvdXRlcyksXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGVcblx0XHRcdFxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHREYXRhYmFzZVNlcnZpY2Vcblx0XVxufSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudE1vZHVsZSB7fVxuIl19