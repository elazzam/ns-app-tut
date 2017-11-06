"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var database_service_1 = require("../../../services/database.service");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var UpdateContactComponent = (function () {
    function UpdateContactComponent(databaseService, nav, route) {
        var _this = this;
        this.databaseService = databaseService;
        this.nav = nav;
        this.route = route;
        this.route.queryParams.subscribe(function (params) {
            _this.address = JSON.parse(params["addr"]);
        });
    }
    UpdateContactComponent.prototype.updateContact = function () {
        var _this = this;
        if (this.address.username !== '' && this.address.number !== '') {
            this.databaseService.update(this.address).then(function (res) {
                _this.nav.navigate(['/databasecheck'], { clearHistory: true });
            });
        }
        else {
            alert("hadachi li dakhalti machi howa hadak ");
        }
    };
    UpdateContactComponent.prototype.cancel = function () {
        this.nav.navigate(['/databasecheck'], { clearHistory: true });
    };
    UpdateContactComponent = __decorate([
        core_1.Component({
            selector: "update-contact",
            moduleId: module.id,
            templateUrl: "./update-contact.html",
            providers: [database_service_1.DatabaseService]
        }),
        __metadata("design:paramtypes", [database_service_1.DatabaseService, router_2.RouterExtensions, router_1.ActivatedRoute])
    ], UpdateContactComponent);
    return UpdateContactComponent;
}());
exports.UpdateContactComponent = UpdateContactComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWNvbnRhY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1cGRhdGUtY29udGFjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUUxQyx1RUFBcUU7QUFDckUsMENBQWlEO0FBQ2pELHNEQUErRDtBQVEvRDtJQUVFLGdDQUFvQixlQUFnQyxFQUFTLEdBQW9CLEVBQVMsS0FBb0I7UUFBOUcsaUJBSUM7UUFKbUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQVMsUUFBRyxHQUFILEdBQUcsQ0FBaUI7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFlO1FBQzVHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDckMsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVNLDhDQUFhLEdBQXBCO1FBQUEsaUJBUUM7UUFQQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsS0FBSyxFQUFFLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvRCxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBTztnQkFDckQsS0FBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLElBQUksRUFBQyxDQUFDLENBQUE7WUFDM0QsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQztRQUNoRCxDQUFDO0lBQ0gsQ0FBQztJQUVNLHVDQUFNLEdBQWI7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBcEJVLHNCQUFzQjtRQU5sQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUMsQ0FBQyxrQ0FBZSxDQUFDO1NBQzVCLENBQUM7eUNBR3FDLGtDQUFlLEVBQWEseUJBQWdCLEVBQWUsdUJBQWM7T0FGbkcsc0JBQXNCLENBcUJsQztJQUFELDZCQUFDO0NBQUEsQUFyQkQsSUFxQkM7QUFyQlksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWRkcmVzcyB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbC9hZGRyZXNzLm1vZGVsXCI7XHJcbmltcG9ydCB7IERhdGFiYXNlU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9kYXRhYmFzZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJ1cGRhdGUtY29udGFjdFwiLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi91cGRhdGUtY29udGFjdC5odG1sXCIsXHJcbiAgcHJvdmlkZXJzOltEYXRhYmFzZVNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVcGRhdGVDb250YWN0Q29tcG9uZW50IHtcclxuICBhZGRyZXNzOkFkZHJlc3M7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRhYmFzZVNlcnZpY2U6IERhdGFiYXNlU2VydmljZSxwcml2YXRlIG5hdjpSb3V0ZXJFeHRlbnNpb25zLHByaXZhdGUgcm91dGU6QWN0aXZhdGVkUm91dGUpIHtcclxuICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgIHRoaXMuYWRkcmVzcyA9IEpTT04ucGFyc2UocGFyYW1zW1wiYWRkclwiXSk7XHJcbiAgICB9KVxyXG4gIH1cclxuICAgIFxyXG4gIHB1YmxpYyB1cGRhdGVDb250YWN0KCkge1xyXG4gICAgaWYgKHRoaXMuYWRkcmVzcy51c2VybmFtZSAhPT0gJycgJiYgdGhpcy5hZGRyZXNzLm51bWJlciAhPT0gJycpIHtcclxuICAgICAgdGhpcy5kYXRhYmFzZVNlcnZpY2UudXBkYXRlKHRoaXMuYWRkcmVzcykudGhlbigocmVzOmFueSkgPT4ge1xyXG4gICAgICAgIHRoaXMubmF2Lm5hdmlnYXRlKFsnL2RhdGFiYXNlY2hlY2snXSx7Y2xlYXJIaXN0b3J5OnRydWV9KVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgYWxlcnQoXCJoYWRhY2hpIGxpIGRha2hhbHRpIG1hY2hpIGhvd2EgaGFkYWsgXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBwdWJsaWMgY2FuY2VsKCkge1xyXG4gICAgdGhpcy5uYXYubmF2aWdhdGUoWycvZGF0YWJhc2VjaGVjayddLHtjbGVhckhpc3Rvcnk6dHJ1ZX0pO1xyXG4gIH1cclxufVxyXG4iXX0=