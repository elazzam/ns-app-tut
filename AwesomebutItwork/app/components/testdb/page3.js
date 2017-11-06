"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var database_service_1 = require("../../services/database.service");
var router_1 = require("nativescript-angular/router");
var dialogs = require("ui/dialogs");
var Page3Component = (function () {
    function Page3Component(databaseService, nav) {
        var _this = this;
        this.databaseService = databaseService;
        this.nav = nav;
        this.databaseService.selectAll().then(function (res) {
            _this.listAddressBook = res;
        });
    }
    Page3Component.prototype.addContact = function () {
        this.nav.navigate(['/addcontact']);
    };
    Page3Component.prototype.selected = function (name, num) {
        var _this = this;
        var address = {
            username: name,
            number: num
        };
        var that = this;
        var res = dialogs.confirm({
            title: "l3ibat",
            message: "m7it ola badlo",
            okButtonText: "Delete",
            cancelButtonText: "Update",
            neutralButtonText: "Cancel"
        }).then(function (result) {
            if (result == false) {
                console.log(address.username);
                var navigationExtras = {
                    queryParams: {
                        "addr": JSON.stringify(address)
                    }
                };
                that.nav.navigate(['/updatecontact'], navigationExtras);
            }
            else if (result) {
                //m7i
                _this.databaseService.remove(address).then(function (res) {
                    _this.databaseService.selectAll().then(function (res) {
                        _this.listAddressBook = res;
                    });
                });
                // TODO refresh the page and remove what it is already removed
                that.nav.navigate(["/databasecheck"], { clearHistory: false });
            }
        });
    };
    Page3Component = __decorate([
        core_1.Component({
            selector: "page3",
            moduleId: module.id,
            templateUrl: 'page3.html',
            providers: [database_service_1.DatabaseService],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [database_service_1.DatabaseService, router_1.RouterExtensions])
    ], Page3Component);
    return Page3Component;
}());
exports.Page3Component = Page3Component;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZTMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYWdlMy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRTtBQUUxRSxvRUFBa0U7QUFFbEUsc0RBQStEO0FBQy9ELElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQVNwQztJQUlDLHdCQUFvQixlQUFnQyxFQUFVLEdBQXFCO1FBQW5GLGlCQUlDO1FBSm1CLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQWtCO1FBQ2xGLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBTztZQUM3QyxLQUFJLENBQUMsZUFBZSxHQUFHLEdBQUcsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQTtJQUNILENBQUM7SUFFTyxtQ0FBVSxHQUFqQjtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRU0saUNBQVEsR0FBZixVQUFnQixJQUFJLEVBQUMsR0FBRztRQUF4QixpQkFrQ0M7UUFqQ0MsSUFBSSxPQUFPLEdBQVk7WUFDckIsUUFBUSxFQUFDLElBQUk7WUFDYixNQUFNLEVBQUcsR0FBRztTQUNiLENBQUE7UUFDRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUN0QixLQUFLLEVBQUUsUUFBUTtZQUNmLE9BQU8sRUFBRSxnQkFBZ0I7WUFDekIsWUFBWSxFQUFFLFFBQVE7WUFDdEIsZ0JBQWdCLEVBQUUsUUFBUTtZQUMxQixpQkFBaUIsRUFBRSxRQUFRO1NBQzlCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO1lBQ1YsRUFBRSxDQUFDLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFBLENBQUM7Z0JBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFBO2dCQUM3QixJQUFJLGdCQUFnQixHQUFzQjtvQkFDeEMsV0FBVyxFQUFHO3dCQUNWLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztxQkFDaEM7aUJBQ0gsQ0FBQTtnQkFDRixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLEVBQUMsZ0JBQWdCLENBQUMsQ0FBQTtZQUN4RCxDQUFDO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFBLENBQUM7Z0JBQ2pCLEtBQUs7Z0JBQ0wsS0FBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztvQkFDM0MsS0FBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFPO3dCQUM5QyxLQUFJLENBQUMsZUFBZSxHQUFHLEdBQUcsQ0FBQztvQkFDN0IsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsQ0FBQyxDQUFDLENBQUE7Z0JBQ0YsOERBQThEO2dCQUM5RCxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQTtZQUM1RCxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFHTCxDQUFDO0lBaERVLGNBQWM7UUFQMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsWUFBWTtZQUN6QixTQUFTLEVBQUMsQ0FBQyxrQ0FBZSxDQUFDO1lBQ3pCLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO1NBQ2xELENBQUM7eUNBS29DLGtDQUFlLEVBQWUseUJBQWdCO09BSnZFLGNBQWMsQ0FpRDFCO0lBQUQscUJBQUM7Q0FBQSxBQWpERCxJQWlEQztBQWpEWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWRkcmVzcyB9IGZyb20gXCIuLi8uLi9tb2RlbC9hZGRyZXNzLm1vZGVsXCI7XHJcbmltcG9ydCB7IERhdGFiYXNlU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kYXRhYmFzZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IE5hdmlnYXRpb25FeHRyYXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxudmFyIGRpYWxvZ3MgPSByZXF1aXJlKFwidWkvZGlhbG9nc1wiKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInBhZ2UzXCIsXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICB0ZW1wbGF0ZVVybDogJ3BhZ2UzLmh0bWwnLFxyXG4gIHByb3ZpZGVyczpbRGF0YWJhc2VTZXJ2aWNlXSxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYWdlM0NvbXBvbmVudCB7XHJcblxyXG5cdHB1YmxpYyBsaXN0QWRkcmVzc0Jvb2s6IEFkZHJlc3NbXTtcclxuXHRcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGFiYXNlU2VydmljZTogRGF0YWJhc2VTZXJ2aWNlLCBwcml2YXRlIG5hdjogUm91dGVyRXh0ZW5zaW9ucykge1xyXG5cdFx0dGhpcy5kYXRhYmFzZVNlcnZpY2Uuc2VsZWN0QWxsKCkudGhlbigocmVzOmFueSkgPT4ge1xyXG5cdFx0XHR0aGlzLmxpc3RBZGRyZXNzQm9vayA9IHJlcztcclxuXHRcdH0pXHJcblx0fVxyXG4gIFxyXG4gIHB1YmxpYyBhZGRDb250YWN0KCkge1xyXG4gICAgdGhpcy5uYXYubmF2aWdhdGUoWycvYWRkY29udGFjdCddKTtcclxuICB9XHJcblx0XHRcclxuICBwdWJsaWMgc2VsZWN0ZWQobmFtZSxudW0pIHtcclxuICAgIGxldCBhZGRyZXNzOiBBZGRyZXNzID0ge1xyXG4gICAgICB1c2VybmFtZTpuYW1lLFxyXG4gICAgICBudW1iZXIgOiBudW1cclxuICAgIH1cclxuICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgIGxldCByZXMgPSBkaWFsb2dzLmNvbmZpcm0oe1xyXG4gICAgICAgIHRpdGxlOiBcImwzaWJhdFwiLFxyXG4gICAgICAgIG1lc3NhZ2U6IFwibTdpdCBvbGEgYmFkbG9cIixcclxuICAgICAgICBva0J1dHRvblRleHQ6IFwiRGVsZXRlXCIsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJVcGRhdGVcIixcclxuICAgICAgICBuZXV0cmFsQnV0dG9uVGV4dDogXCJDYW5jZWxcIlxyXG4gICAgfSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgIGlmIChyZXN1bHQgPT0gZmFsc2Upe1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYWRkcmVzcy51c2VybmFtZSlcclxuICAgICAgICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzIDogTmF2aWdhdGlvbkV4dHJhcyA9IHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbXMgOiB7XHJcbiAgICAgICAgICAgICAgICBcImFkZHJcIjogSlNPTi5zdHJpbmdpZnkoYWRkcmVzcylcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgdGhhdC5uYXYubmF2aWdhdGUoWycvdXBkYXRlY29udGFjdCddLG5hdmlnYXRpb25FeHRyYXMpXHJcbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQpe1xyXG4gICAgICAgICAgLy9tN2lcclxuICAgICAgICAgIHRoaXMuZGF0YWJhc2VTZXJ2aWNlLnJlbW92ZShhZGRyZXNzKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YWJhc2VTZXJ2aWNlLnNlbGVjdEFsbCgpLnRoZW4oKHJlczphbnkpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5saXN0QWRkcmVzc0Jvb2sgPSByZXM7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAvLyBUT0RPIHJlZnJlc2ggdGhlIHBhZ2UgYW5kIHJlbW92ZSB3aGF0IGl0IGlzIGFscmVhZHkgcmVtb3ZlZFxyXG4gICAgICAgICAgdGhhdC5uYXYubmF2aWdhdGUoW1wiL2RhdGFiYXNlY2hlY2tcIl0se2NsZWFySGlzdG9yeTpmYWxzZX0pXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBcclxuXHJcbiAgfVxyXG59XHJcbiJdfQ==