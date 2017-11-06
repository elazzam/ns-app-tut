"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var database_service_1 = require("../../services/database.service");
var Page3Component = (function () {
    function Page3Component(databaseService) {
        var _this = this;
        this.databaseService = databaseService;
        this.databaseService.selectAll().then(function (res) {
            _this.listAddressBook = res;
        });
    }
    Page3Component = __decorate([
        core_1.Component({
            selector: "page3",
            moduleId: module.id,
            templateUrl: './components/testdb/page3.html',
        }),
        __metadata("design:paramtypes", [database_service_1.DatabaseService])
    ], Page3Component);
    return Page3Component;
}());
exports.Page3Component = Page3Component;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZTMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYWdlMy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUUxQyxvRUFBa0U7QUFPbEU7SUFJQyx3QkFBb0IsZUFBZ0M7UUFBcEQsaUJBSUM7UUFKbUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ25ELElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBTztZQUM3QyxLQUFJLENBQUMsZUFBZSxHQUFHLEdBQUcsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQTtJQUNILENBQUM7SUFSVyxjQUFjO1FBTDFCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsT0FBTztZQUNqQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGdDQUFnQztTQUM5QyxDQUFDO3lDQUtvQyxrQ0FBZTtPQUp4QyxjQUFjLENBVTFCO0lBQUQscUJBQUM7Q0FBQSxBQVZELElBVUM7QUFWWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFkZHJlc3MgfSBmcm9tIFwiLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbFwiO1xyXG5pbXBvcnQgeyBEYXRhYmFzZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGF0YWJhc2Uuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwicGFnZTNcIixcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL3Rlc3RkYi9wYWdlMy5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2UzQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIGxpc3RBZGRyZXNzQm9vazogQWRkcmVzc1tdO1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0YWJhc2VTZXJ2aWNlOiBEYXRhYmFzZVNlcnZpY2UpIHtcclxuXHRcdHRoaXMuZGF0YWJhc2VTZXJ2aWNlLnNlbGVjdEFsbCgpLnRoZW4oKHJlczphbnkpID0+IHtcclxuXHRcdFx0dGhpcy5saXN0QWRkcmVzc0Jvb2sgPSByZXM7XHJcblx0XHR9KVxyXG5cdH1cclxuXHRcdFxyXG59XHJcbiJdfQ==