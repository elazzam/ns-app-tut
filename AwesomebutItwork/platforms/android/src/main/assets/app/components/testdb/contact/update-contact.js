"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var database_service_1 = require("../../../services/database.service");
var router_1 = require("nativescript-angular/router");
var UpdateContactComponent = (function () {
    function UpdateContactComponent(databaseService, nav) {
        this.databaseService = databaseService;
        this.nav = nav;
        this.address = {
            username: '',
            number: ''
        };
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
        __metadata("design:paramtypes", [database_service_1.DatabaseService, router_1.RouterExtensions])
    ], UpdateContactComponent);
    return UpdateContactComponent;
}());
exports.UpdateContactComponent = UpdateContactComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWNvbnRhY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1cGRhdGUtY29udGFjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUUxQyx1RUFBcUU7QUFDckUsc0RBQStEO0FBUS9EO0lBRUUsZ0NBQW9CLGVBQWdDLEVBQVMsR0FBb0I7UUFBN0Qsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQVMsUUFBRyxHQUFILEdBQUcsQ0FBaUI7UUFDL0UsSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNiLFFBQVEsRUFBRSxFQUFFO1lBQ1osTUFBTSxFQUFFLEVBQUU7U0FDWCxDQUFBO0lBQ0gsQ0FBQztJQUVNLDhDQUFhLEdBQXBCO1FBQUEsaUJBUUM7UUFQQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsS0FBSyxFQUFFLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvRCxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBTztnQkFDckQsS0FBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLElBQUksRUFBQyxDQUFDLENBQUE7WUFDM0QsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQztRQUNoRCxDQUFDO0lBQ0gsQ0FBQztJQUVNLHVDQUFNLEdBQWI7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBckJVLHNCQUFzQjtRQU5sQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUMsQ0FBQyxrQ0FBZSxDQUFDO1NBQzVCLENBQUM7eUNBR3FDLGtDQUFlLEVBQWEseUJBQWdCO09BRnRFLHNCQUFzQixDQXNCbEM7SUFBRCw2QkFBQztDQUFBLEFBdEJELElBc0JDO0FBdEJZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFkZHJlc3MgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbFwiO1xyXG5pbXBvcnQgeyBEYXRhYmFzZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvZGF0YWJhc2Uuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInVwZGF0ZS1jb250YWN0XCIsXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICB0ZW1wbGF0ZVVybDogXCIuL3VwZGF0ZS1jb250YWN0Lmh0bWxcIixcclxuICBwcm92aWRlcnM6W0RhdGFiYXNlU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFVwZGF0ZUNvbnRhY3RDb21wb25lbnQge1xyXG4gIGFkZHJlc3M6QWRkcmVzcztcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGFiYXNlU2VydmljZTogRGF0YWJhc2VTZXJ2aWNlLHByaXZhdGUgbmF2OlJvdXRlckV4dGVuc2lvbnMpIHtcclxuICAgIHRoaXMuYWRkcmVzcyA9IHtcclxuICAgICAgdXNlcm5hbWU6ICcnLFxyXG4gICAgICBudW1iZXI6ICcnXHJcbiAgICB9XHJcbiAgfVxyXG4gICAgXHJcbiAgcHVibGljIHVwZGF0ZUNvbnRhY3QoKSB7XHJcbiAgICBpZiAodGhpcy5hZGRyZXNzLnVzZXJuYW1lICE9PSAnJyAmJiB0aGlzLmFkZHJlc3MubnVtYmVyICE9PSAnJykge1xyXG4gICAgICB0aGlzLmRhdGFiYXNlU2VydmljZS51cGRhdGUodGhpcy5hZGRyZXNzKS50aGVuKChyZXM6YW55KSA9PiB7XHJcbiAgICAgICAgdGhpcy5uYXYubmF2aWdhdGUoWycvZGF0YWJhc2VjaGVjayddLHtjbGVhckhpc3Rvcnk6dHJ1ZX0pXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICBhbGVydChcImhhZGFjaGkgbGkgZGFraGFsdGkgbWFjaGkgaG93YSBoYWRhayBcIik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIHB1YmxpYyBjYW5jZWwoKSB7XHJcbiAgICB0aGlzLm5hdi5uYXZpZ2F0ZShbJy9kYXRhYmFzZWNoZWNrJ10se2NsZWFySGlzdG9yeTp0cnVlfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==