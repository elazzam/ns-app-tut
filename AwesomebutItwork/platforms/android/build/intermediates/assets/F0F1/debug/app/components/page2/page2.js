"use strict";
// provider aprouch
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var data_1 = require("../../providers/data/data");
var Page2Component = (function () {
    function Page2Component(data) {
        this.data = data;
        this.person = this.data.storage;
    }
    Page2Component = __decorate([
        core_1.Component({
            selector: "page2",
            templateUrl: './components/page2/page2.html',
        }),
        __metadata("design:paramtypes", [data_1.Data])
    ], Page2Component);
    return Page2Component;
}());
exports.Page2Component = Page2Component;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZTIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYWdlMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsbUJBQW1COztBQUVuQixzQ0FBMEM7QUFDMUMsa0RBQWlEO0FBTWpEO0lBR0Msd0JBQTJCLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ3BDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDakMsQ0FBQztJQUxXLGNBQWM7UUFKMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFdBQVcsRUFBRSwrQkFBK0I7U0FDN0MsQ0FBQzt5Q0FJZ0MsV0FBSTtPQUh6QixjQUFjLENBUzFCO0lBQUQscUJBQUM7Q0FBQSxBQVRELElBU0M7QUFUWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHByb3ZpZGVyIGFwcm91Y2hcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IERhdGEgfSBmcm9tIFwiLi4vLi4vcHJvdmlkZXJzL2RhdGEvZGF0YVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwicGFnZTJcIixcclxuICB0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy9wYWdlMi9wYWdlMi5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2UyQ29tcG9uZW50IHtcclxuXHRwdWJsaWMgcGVyc29uOmFueTtcclxuXHJcblx0cHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0YTogRGF0YSkge1xyXG5cdFx0dGhpcy5wZXJzb24gPSB0aGlzLmRhdGEuc3RvcmFnZTtcclxuXHR9XHJcblx0XHJcblxyXG5cdFxyXG59XHJcbiJdfQ==