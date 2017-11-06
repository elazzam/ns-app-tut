"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var HomeComponent = (function () {
    function HomeComponent(route) {
        var _this = this;
        this.route = route;
        this.route.params.subscribe(function (params) {
            _this.fullname = params["name"];
        });
    }
    HomeComponent = __decorate([
        core_1.Component({
            selector: "login",
            templateUrl: './components/home/home.html',
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMENBQWlEO0FBTWpEO0lBSUMsdUJBQTJCLEtBQXFCO1FBQWhELGlCQUlDO1FBSjBCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQy9DLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQU07WUFDbEMsS0FBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBUlcsYUFBYTtRQUp6QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE9BQU87WUFDakIsV0FBVyxFQUFFLDZCQUE2QjtTQUMzQyxDQUFDO3lDQUtpQyx1QkFBYztPQUpwQyxhQUFhLENBVXpCO0lBQUQsb0JBQUM7Q0FBQSxBQVZELElBVUM7QUFWWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibG9naW5cIixcclxuICB0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy9ob21lL2hvbWUuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIGZ1bGxuYW1lOiBzdHJpbmc7XHJcblx0XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XHJcblx0XHR0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xyXG5cdFx0XHR0aGlzLmZ1bGxuYW1lID0gcGFyYW1zW1wibmFtZVwiXTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRcclxufVxyXG4iXX0=