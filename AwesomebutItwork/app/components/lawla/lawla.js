"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var data_1 = require("../../providers/data/data");
var LawlaComponent = (function () {
    function LawlaComponent(router, data) {
        this.router = router;
        this.data = data;
    }
    LawlaComponent.prototype.onTap = function () {
        this.router.navigate(["home", "abdeslam elazzam"]);
    };
    LawlaComponent.prototype.onTap2 = function () {
        var navigationExtras = {
            //  		queryParams : {
            //  			"firstname":"Abdeslam",
            //  			"lastname":"El azzam"
            //  		}
            queryParams: {
                "person": JSON.stringify({
                    "firstname": "Abdeslam",
                    "lastname": "El azzam",
                    "address": {
                        "city": "Nice",
                        "country": "France"
                    }
                })
            }
        };
        this.data.storage =
            this.router.navigate(["page1"], navigationExtras);
    };
    LawlaComponent.prototype.onTap3 = function () {
        this.data.storage = {
            "firstname": "Abdeslam",
            "lastname": "El azzam",
            "address": {
                "city": "Nice",
                "country": "France"
            }
        };
        this.router.navigate(["page2"]);
    };
    LawlaComponent.prototype.onTap4 = function () {
        this.router.navigate(["databasecheck"]);
    };
    LawlaComponent = __decorate([
        core_1.Component({
            selector: "lawla",
            templateUrl: './components/lawla/lawla.html',
        }),
        __metadata("design:paramtypes", [router_1.Router, data_1.Data])
    ], LawlaComponent);
    return LawlaComponent;
}());
exports.LawlaComponent = LawlaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF3bGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsYXdsYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywwQ0FBMkQ7QUFDM0Qsa0RBQWlEO0FBTWpEO0lBQ0Msd0JBQTJCLE1BQWEsRUFBUyxJQUFVO1FBQWhDLFdBQU0sR0FBTixNQUFNLENBQU87UUFBUyxTQUFJLEdBQUosSUFBSSxDQUFNO0lBRTNELENBQUM7SUFDTyw4QkFBSyxHQUFaO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFTSwrQkFBTSxHQUFiO1FBQ0UsSUFBSSxnQkFBZ0IsR0FBc0I7WUFDOUMscUJBQXFCO1lBQ3JCLDhCQUE4QjtZQUM5Qiw0QkFBNEI7WUFDNUIsT0FBTztZQUNKLFdBQVcsRUFBRztnQkFDWCxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztvQkFDeEIsV0FBVyxFQUFDLFVBQVU7b0JBQ3RCLFVBQVUsRUFBQyxVQUFVO29CQUNyQixTQUFTLEVBQUU7d0JBQ1YsTUFBTSxFQUFHLE1BQU07d0JBQ2YsU0FBUyxFQUFHLFFBQVE7cUJBQ3BCO2lCQUNBLENBQUM7YUFDSDtTQUNELENBQUE7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87WUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFUSwrQkFBTSxHQUFiO1FBRUEsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDbkIsV0FBVyxFQUFDLFVBQVU7WUFDdEIsVUFBVSxFQUFDLFVBQVU7WUFDckIsU0FBUyxFQUFFO2dCQUNWLE1BQU0sRUFBRyxNQUFNO2dCQUNmLFNBQVMsRUFBRyxRQUFRO2FBQ3BCO1NBQ0QsQ0FBQztRQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRVUsK0JBQU0sR0FBYjtRQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBNUNVLGNBQWM7UUFKMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFdBQVcsRUFBRSwrQkFBK0I7U0FDN0MsQ0FBQzt5Q0FFaUMsZUFBTSxFQUFlLFdBQUk7T0FEL0MsY0FBYyxDQTZDMUI7SUFBRCxxQkFBQztDQUFBLEFBN0NELElBNkNDO0FBN0NZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uRXh0cmFzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiOyBcclxuaW1wb3J0IHsgRGF0YSB9IGZyb20gXCIuLi8uLi9wcm92aWRlcnMvZGF0YS9kYXRhXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJsYXdsYVwiLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL2xhd2xhL2xhd2xhLmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGF3bGFDb21wb25lbnQge1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjpSb3V0ZXIscHJpdmF0ZSBkYXRhOiBEYXRhKSB7XHJcblx0XHRcclxuXHR9XHJcbiAgcHVibGljIG9uVGFwKCkge1xyXG4gIFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJob21lXCIsXCJhYmRlc2xhbSBlbGF6emFtXCJdKTtcclxuICB9XHJcbiAgXHJcbiAgcHVibGljIG9uVGFwMigpIHtcclxuICBcdFx0bGV0IG5hdmlnYXRpb25FeHRyYXMgOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xyXG4vLyAgXHRcdHF1ZXJ5UGFyYW1zIDoge1xyXG4vLyAgXHRcdFx0XCJmaXJzdG5hbWVcIjpcIkFiZGVzbGFtXCIsXHJcbi8vICBcdFx0XHRcImxhc3RuYW1lXCI6XCJFbCBhenphbVwiXHJcbi8vICBcdFx0fVxyXG5cdFx0XHRxdWVyeVBhcmFtcyA6IHtcclxuICBcdFx0XHRcdFwicGVyc29uXCI6IEpTT04uc3RyaW5naWZ5KHtcclxuICBcdFx0XHRcdFx0XCJmaXJzdG5hbWVcIjpcIkFiZGVzbGFtXCIsXHJcbiAgXHRcdFx0XHRcdFwibGFzdG5hbWVcIjpcIkVsIGF6emFtXCIsXHJcbiAgXHRcdFx0XHRcdFwiYWRkcmVzc1wiOiB7XHJcbiAgXHRcdFx0XHRcdFx0XCJjaXR5XCIgOiBcIk5pY2VcIixcclxuICBcdFx0XHRcdFx0XHRcImNvdW50cnlcIiA6IFwiRnJhbmNlXCJcclxuICBcdFx0XHRcdFx0fVxyXG4gIFx0XHRcdFx0XHR9KVxyXG4gIFx0XHRcdH1cclxuICBcdFx0fVxyXG4gIFx0XHR0aGlzLmRhdGEuc3RvcmFnZSA9IFxyXG4gIFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJwYWdlMVwiXSxuYXZpZ2F0aW9uRXh0cmFzKTtcclxuICB9XHJcbiAgXHJcbiAgICBwdWJsaWMgb25UYXAzKCkge1xyXG4gIFx0XHRcclxuICBcdFx0dGhpcy5kYXRhLnN0b3JhZ2UgPSB7XHJcbiAgXHRcdFx0XCJmaXJzdG5hbWVcIjpcIkFiZGVzbGFtXCIsXHJcbiAgXHRcdFx0XCJsYXN0bmFtZVwiOlwiRWwgYXp6YW1cIixcclxuICBcdFx0XHRcImFkZHJlc3NcIjoge1xyXG4gIFx0XHRcdFx0XCJjaXR5XCIgOiBcIk5pY2VcIixcclxuICBcdFx0XHRcdFwiY291bnRyeVwiIDogXCJGcmFuY2VcIlxyXG4gIFx0XHRcdH1cclxuICBcdFx0fTtcclxuICBcdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wicGFnZTJcIl0pO1xyXG4gIH1cclxuICBcclxuICAgICAgcHVibGljIG9uVGFwNCgpIHtcclxuICBcdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiZGF0YWJhc2VjaGVja1wiXSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==