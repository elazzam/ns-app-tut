"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_1 = require("./components/connexion/login");
var home_1 = require("./components/home/home");
var page1_1 = require("./components/page1/page1");
var page2_1 = require("./components/page2/page2");
var camera_1 = require("./components/picture/camera");
var page3_1 = require("./components/testdb/page3");
exports.appRoutes = [
    { path: "", component: login_1.LoginComponent },
    { path: "home/:name", component: home_1.HomeComponent },
    { path: "page1", component: page1_1.Page1Component },
    { path: "page2", component: page2_1.Page2Component },
    { path: "camera", component: camera_1.CameraComponent },
    { path: "databasecheck", component: page3_1.Page3Component }
];
exports.appComponents = [
    login_1.LoginComponent,
    home_1.HomeComponent,
    page1_1.Page1Component,
    page2_1.Page2Component,
    camera_1.CameraComponent,
    page3_1.Page3Component
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNEQUE4RDtBQUM5RCwrQ0FBdUQ7QUFDdkQsa0RBQTBEO0FBQzFELGtEQUEwRDtBQUMxRCxzREFBOEQ7QUFDOUQsbURBQTJEO0FBRTlDLFFBQUEsU0FBUyxHQUFRO0lBQzdCLEVBQUUsSUFBSSxFQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUcsc0JBQWMsRUFBRTtJQUN6QyxFQUFFLElBQUksRUFBRyxZQUFZLEVBQUUsU0FBUyxFQUFHLG9CQUFhLEVBQUU7SUFDbEQsRUFBRSxJQUFJLEVBQUcsT0FBTyxFQUFFLFNBQVMsRUFBRyxzQkFBYyxFQUFFO0lBQzlDLEVBQUUsSUFBSSxFQUFHLE9BQU8sRUFBRSxTQUFTLEVBQUcsc0JBQWMsRUFBRTtJQUM5QyxFQUFFLElBQUksRUFBRyxRQUFRLEVBQUUsU0FBUyxFQUFHLHdCQUFlLEVBQUU7SUFDaEQsRUFBRSxJQUFJLEVBQUcsZUFBZSxFQUFFLFNBQVMsRUFBRyxzQkFBYyxFQUFFO0NBRXRELENBQUM7QUFFVyxRQUFBLGFBQWEsR0FBUTtJQUNqQyxzQkFBYztJQUNkLG9CQUFhO0lBQ2Isc0JBQWM7SUFDZCxzQkFBYztJQUNkLHdCQUFlO0lBQ2Ysc0JBQWM7Q0FDZCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2Nvbm5leGlvbi9sb2dpblwiO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9ob21lL2hvbWVcIjtcclxuaW1wb3J0IHsgUGFnZTFDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2UxL3BhZ2UxXCI7XHJcbmltcG9ydCB7IFBhZ2UyQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9wYWdlMi9wYWdlMlwiO1xyXG5pbXBvcnQgeyBDYW1lcmFDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3BpY3R1cmUvY2FtZXJhXCI7XHJcbmltcG9ydCB7IFBhZ2UzQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy90ZXN0ZGIvcGFnZTNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhcHBSb3V0ZXM6IGFueSA9IFtcclxuXHR7IHBhdGggOiBcIlwiLCBjb21wb25lbnQgOiBMb2dpbkNvbXBvbmVudCB9LFxyXG5cdHsgcGF0aCA6IFwiaG9tZS86bmFtZVwiLCBjb21wb25lbnQgOiBIb21lQ29tcG9uZW50IH0sXHJcblx0eyBwYXRoIDogXCJwYWdlMVwiLCBjb21wb25lbnQgOiBQYWdlMUNvbXBvbmVudCB9LFxyXG5cdHsgcGF0aCA6IFwicGFnZTJcIiwgY29tcG9uZW50IDogUGFnZTJDb21wb25lbnQgfSxcclxuXHR7IHBhdGggOiBcImNhbWVyYVwiLCBjb21wb25lbnQgOiBDYW1lcmFDb21wb25lbnQgfSxcclxuXHR7IHBhdGggOiBcImRhdGFiYXNlY2hlY2tcIiwgY29tcG9uZW50IDogUGFnZTNDb21wb25lbnQgfVxyXG5cdFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFwcENvbXBvbmVudHM6IGFueSA9IFtcclxuXHRMb2dpbkNvbXBvbmVudCxcclxuXHRIb21lQ29tcG9uZW50LFxyXG5cdFBhZ2UxQ29tcG9uZW50LFxyXG5cdFBhZ2UyQ29tcG9uZW50LFxyXG5cdENhbWVyYUNvbXBvbmVudCxcclxuXHRQYWdlM0NvbXBvbmVudCBcclxuXTtcclxuXHJcbiJdfQ==