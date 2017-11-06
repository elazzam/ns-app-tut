"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var database_service_1 = require("../../../services/database.service");
var router_1 = require("nativescript-angular/router");
var AddContactComponent = (function () {
    function AddContactComponent(databaseService, nav) {
        this.databaseService = databaseService;
        this.nav = nav;
        this.address = {
            username: '',
            number: ''
        };
    }
    AddContactComponent.prototype.saveContact = function () {
        var _this = this;
        if (this.address.username !== '' && this.address.number !== '') {
            this.databaseService.insert(this.address).then(function (res) {
                _this.nav.navigate(['/databasecheck'], { clearHistory: true });
            });
        }
        else {
            alert("hadachi li dakhalti machi howa hadak ");
        }
    };
    AddContactComponent.prototype.cancel = function () {
        this.nav.navigate(['/databasecheck'], { clearHistory: true });
    };
    AddContactComponent = __decorate([
        core_1.Component({
            selector: "add-contact",
            moduleId: module.id,
            templateUrl: "add-contact.html",
            providers: [database_service_1.DatabaseService]
        }),
        __metadata("design:paramtypes", [database_service_1.DatabaseService, router_1.RouterExtensions])
    ], AddContactComponent);
    return AddContactComponent;
}());
exports.AddContactComponent = AddContactComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWNvbnRhY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhZGQtY29udGFjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUUxQyx1RUFBcUU7QUFDckUsc0RBQStEO0FBUS9EO0lBRUUsNkJBQW9CLGVBQWdDLEVBQVMsR0FBb0I7UUFBN0Qsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQVMsUUFBRyxHQUFILEdBQUcsQ0FBaUI7UUFDL0UsSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNiLFFBQVEsRUFBRSxFQUFFO1lBQ1osTUFBTSxFQUFFLEVBQUU7U0FDWCxDQUFBO0lBQ0gsQ0FBQztJQUVNLHlDQUFXLEdBQWxCO1FBQUEsaUJBUUM7UUFQQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsS0FBSyxFQUFFLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvRCxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBTztnQkFDckQsS0FBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLElBQUksRUFBQyxDQUFDLENBQUE7WUFDM0QsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQztRQUNoRCxDQUFDO0lBQ0gsQ0FBQztJQUVNLG9DQUFNLEdBQWI7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBckJVLG1CQUFtQjtRQU4vQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGFBQWE7WUFDdkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxrQkFBa0I7WUFDL0IsU0FBUyxFQUFDLENBQUMsa0NBQWUsQ0FBQztTQUM1QixDQUFDO3lDQUdxQyxrQ0FBZSxFQUFhLHlCQUFnQjtPQUZ0RSxtQkFBbUIsQ0FzQi9CO0lBQUQsMEJBQUM7Q0FBQSxBQXRCRCxJQXNCQztBQXRCWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBZGRyZXNzIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVsL2FkZHJlc3MubW9kZWxcIjtcclxuaW1wb3J0IHsgRGF0YWJhc2VTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL2RhdGFiYXNlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJhZGQtY29udGFjdFwiLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6IFwiYWRkLWNvbnRhY3QuaHRtbFwiLFxyXG4gIHByb3ZpZGVyczpbRGF0YWJhc2VTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWRkQ29udGFjdENvbXBvbmVudCB7XHJcbiAgYWRkcmVzczpBZGRyZXNzO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0YWJhc2VTZXJ2aWNlOiBEYXRhYmFzZVNlcnZpY2UscHJpdmF0ZSBuYXY6Um91dGVyRXh0ZW5zaW9ucykge1xyXG4gICAgdGhpcy5hZGRyZXNzID0ge1xyXG4gICAgICB1c2VybmFtZTogJycsXHJcbiAgICAgIG51bWJlcjogJydcclxuICAgIH1cclxuICB9XHJcbiAgICBcclxuICBwdWJsaWMgc2F2ZUNvbnRhY3QoKSB7XHJcbiAgICBpZiAodGhpcy5hZGRyZXNzLnVzZXJuYW1lICE9PSAnJyAmJiB0aGlzLmFkZHJlc3MubnVtYmVyICE9PSAnJykge1xyXG4gICAgICB0aGlzLmRhdGFiYXNlU2VydmljZS5pbnNlcnQodGhpcy5hZGRyZXNzKS50aGVuKChyZXM6YW55KSA9PiB7XHJcbiAgICAgICAgdGhpcy5uYXYubmF2aWdhdGUoWycvZGF0YWJhc2VjaGVjayddLHtjbGVhckhpc3Rvcnk6dHJ1ZX0pXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICBhbGVydChcImhhZGFjaGkgbGkgZGFraGFsdGkgbWFjaGkgaG93YSBoYWRhayBcIik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIHB1YmxpYyBjYW5jZWwoKSB7XHJcbiAgICB0aGlzLm5hdi5uYXZpZ2F0ZShbJy9kYXRhYmFzZWNoZWNrJ10se2NsZWFySGlzdG9yeTp0cnVlfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==