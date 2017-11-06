"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
var Page1Component = (function () {
    //public firstname:string;
    //public lastname:string;
    function Page1Component(router, route) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.route.queryParams.subscribe(function (params) {
            _this.person = JSON.parse(params["person"]);
            console.log(params["person"]);
            //this.firstname = params["firstname"];
            //this.lastname = params["lastname"];
        });
    }
    Page1Component.prototype.onTap = function () {
        this.router.navigate(["camera"]);
    };
    Page1Component = __decorate([
        core_1.Component({
            selector: "page1",
            templateUrl: './components/page1/page1.html',
        }),
        __metadata("design:paramtypes", [router_1.Router, router_2.ActivatedRoute])
    ], Page1Component);
    return Page1Component;
}());
exports.Page1Component = Page1Component;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZTEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYWdlMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywwQ0FBeUM7QUFDekMsMENBQWlEO0FBTWpEO0lBRUMsMEJBQTBCO0lBQzFCLHlCQUF5QjtJQUV6Qix3QkFBMkIsTUFBYSxFQUFVLEtBQXFCO1FBQXZFLGlCQVVDO1FBVjBCLFdBQU0sR0FBTixNQUFNLENBQU87UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUN0RSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ3RDLEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzlCLHVDQUF1QztZQUN2QyxxQ0FBcUM7UUFJdEMsQ0FBQyxDQUFDLENBQUE7SUFDSCxDQUFDO0lBRU0sOEJBQUssR0FBWjtRQUNDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBbkJXLGNBQWM7UUFKMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFdBQVcsRUFBRSwrQkFBK0I7U0FDN0MsQ0FBQzt5Q0FNaUMsZUFBTSxFQUFpQix1QkFBYztPQUwzRCxjQUFjLENBcUIxQjtJQUFELHFCQUFDO0NBQUEsQUFyQkQsSUFxQkM7QUFyQlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7IFxyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInBhZ2UxXCIsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvcGFnZTEvcGFnZTEuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYWdlMUNvbXBvbmVudCB7XHJcblx0cHVibGljIHBlcnNvbjphbnk7XHJcblx0Ly9wdWJsaWMgZmlyc3RuYW1lOnN0cmluZztcclxuXHQvL3B1YmxpYyBsYXN0bmFtZTpzdHJpbmc7XHJcblxyXG5cdHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjpSb3V0ZXIsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XHJcblx0XHR0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG5cdFx0XHR0aGlzLnBlcnNvbiA9IEpTT04ucGFyc2UocGFyYW1zW1wicGVyc29uXCJdKTtcclxuXHRcdFx0Y29uc29sZS5sb2cocGFyYW1zW1wicGVyc29uXCJdKTtcclxuXHRcdFx0Ly90aGlzLmZpcnN0bmFtZSA9IHBhcmFtc1tcImZpcnN0bmFtZVwiXTtcclxuXHRcdFx0Ly90aGlzLmxhc3RuYW1lID0gcGFyYW1zW1wibGFzdG5hbWVcIl07XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHR9KVxyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgb25UYXAoKSB7XHJcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJjYW1lcmFcIl0pO1xyXG5cdH1cclxuXHRcclxufVxyXG4iXX0=