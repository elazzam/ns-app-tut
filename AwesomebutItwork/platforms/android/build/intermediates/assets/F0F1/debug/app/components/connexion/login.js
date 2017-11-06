"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var data_1 = require("../../providers/data/data");
var LoginComponent = (function () {
    function LoginComponent(router, data) {
        this.router = router;
        this.data = data;
    }
    LoginComponent.prototype.onTap = function () {
        this.router.navigate(["home", "abdeslam elazzam"]);
    };
    LoginComponent.prototype.onTap2 = function () {
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
    LoginComponent.prototype.onTap3 = function () {
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
    LoginComponent.prototype.onTap4 = function () {
        this.router.navigate(["databasecheck"]);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "login",
            templateUrl: './components/connexion/login.html',
        }),
        __metadata("design:paramtypes", [router_1.Router, data_1.Data])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywwQ0FBMkQ7QUFDM0Qsa0RBQWlEO0FBTWpEO0lBQ0Msd0JBQTJCLE1BQWEsRUFBUyxJQUFVO1FBQWhDLFdBQU0sR0FBTixNQUFNLENBQU87UUFBUyxTQUFJLEdBQUosSUFBSSxDQUFNO0lBRTNELENBQUM7SUFDTyw4QkFBSyxHQUFaO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFTSwrQkFBTSxHQUFiO1FBQ0UsSUFBSSxnQkFBZ0IsR0FBc0I7WUFDOUMscUJBQXFCO1lBQ3JCLDhCQUE4QjtZQUM5Qiw0QkFBNEI7WUFDNUIsT0FBTztZQUNKLFdBQVcsRUFBRztnQkFDWCxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztvQkFDeEIsV0FBVyxFQUFDLFVBQVU7b0JBQ3RCLFVBQVUsRUFBQyxVQUFVO29CQUNyQixTQUFTLEVBQUU7d0JBQ1YsTUFBTSxFQUFHLE1BQU07d0JBQ2YsU0FBUyxFQUFHLFFBQVE7cUJBQ3BCO2lCQUNBLENBQUM7YUFDSDtTQUNELENBQUE7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87WUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFUSwrQkFBTSxHQUFiO1FBRUEsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDbkIsV0FBVyxFQUFDLFVBQVU7WUFDdEIsVUFBVSxFQUFDLFVBQVU7WUFDckIsU0FBUyxFQUFFO2dCQUNWLE1BQU0sRUFBRyxNQUFNO2dCQUNmLFNBQVMsRUFBRyxRQUFRO2FBQ3BCO1NBQ0QsQ0FBQztRQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRVUsK0JBQU0sR0FBYjtRQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBNUNVLGNBQWM7UUFKMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFdBQVcsRUFBRSxtQ0FBbUM7U0FDakQsQ0FBQzt5Q0FFaUMsZUFBTSxFQUFlLFdBQUk7T0FEL0MsY0FBYyxDQTZDMUI7SUFBRCxxQkFBQztDQUFBLEFBN0NELElBNkNDO0FBN0NZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uRXh0cmFzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiOyBcclxuaW1wb3J0IHsgRGF0YSB9IGZyb20gXCIuLi8uLi9wcm92aWRlcnMvZGF0YS9kYXRhXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJsb2dpblwiLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL2Nvbm5leGlvbi9sb2dpbi5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IHtcclxuXHRwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6Um91dGVyLHByaXZhdGUgZGF0YTogRGF0YSkge1xyXG5cdFx0XHJcblx0fVxyXG4gIHB1YmxpYyBvblRhcCgpIHtcclxuICBcdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiaG9tZVwiLFwiYWJkZXNsYW0gZWxhenphbVwiXSk7XHJcbiAgfVxyXG4gIFxyXG4gIHB1YmxpYyBvblRhcDIoKSB7XHJcbiAgXHRcdGxldCBuYXZpZ2F0aW9uRXh0cmFzIDogTmF2aWdhdGlvbkV4dHJhcyA9IHtcclxuLy8gIFx0XHRxdWVyeVBhcmFtcyA6IHtcclxuLy8gIFx0XHRcdFwiZmlyc3RuYW1lXCI6XCJBYmRlc2xhbVwiLFxyXG4vLyAgXHRcdFx0XCJsYXN0bmFtZVwiOlwiRWwgYXp6YW1cIlxyXG4vLyAgXHRcdH1cclxuXHRcdFx0cXVlcnlQYXJhbXMgOiB7XHJcbiAgXHRcdFx0XHRcInBlcnNvblwiOiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgXHRcdFx0XHRcdFwiZmlyc3RuYW1lXCI6XCJBYmRlc2xhbVwiLFxyXG4gIFx0XHRcdFx0XHRcImxhc3RuYW1lXCI6XCJFbCBhenphbVwiLFxyXG4gIFx0XHRcdFx0XHRcImFkZHJlc3NcIjoge1xyXG4gIFx0XHRcdFx0XHRcdFwiY2l0eVwiIDogXCJOaWNlXCIsXHJcbiAgXHRcdFx0XHRcdFx0XCJjb3VudHJ5XCIgOiBcIkZyYW5jZVwiXHJcbiAgXHRcdFx0XHRcdH1cclxuICBcdFx0XHRcdFx0fSlcclxuICBcdFx0XHR9XHJcbiAgXHRcdH1cclxuICBcdFx0dGhpcy5kYXRhLnN0b3JhZ2UgPSBcclxuICBcdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wicGFnZTFcIl0sbmF2aWdhdGlvbkV4dHJhcyk7XHJcbiAgfVxyXG4gIFxyXG4gICAgcHVibGljIG9uVGFwMygpIHtcclxuICBcdFx0XHJcbiAgXHRcdHRoaXMuZGF0YS5zdG9yYWdlID0ge1xyXG4gIFx0XHRcdFwiZmlyc3RuYW1lXCI6XCJBYmRlc2xhbVwiLFxyXG4gIFx0XHRcdFwibGFzdG5hbWVcIjpcIkVsIGF6emFtXCIsXHJcbiAgXHRcdFx0XCJhZGRyZXNzXCI6IHtcclxuICBcdFx0XHRcdFwiY2l0eVwiIDogXCJOaWNlXCIsXHJcbiAgXHRcdFx0XHRcImNvdW50cnlcIiA6IFwiRnJhbmNlXCJcclxuICBcdFx0XHR9XHJcbiAgXHRcdH07XHJcbiAgXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInBhZ2UyXCJdKTtcclxuICB9XHJcbiAgXHJcbiAgICAgIHB1YmxpYyBvblRhcDQoKSB7XHJcbiAgXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImRhdGFiYXNlY2hlY2tcIl0pO1xyXG4gIH1cclxufVxyXG4iXX0=