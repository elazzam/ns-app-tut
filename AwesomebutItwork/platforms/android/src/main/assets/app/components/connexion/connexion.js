"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_mock_1 = require("../../mock/user.mock");
var router_2 = require("nativescript-angular/router");
var LoginComponent = (function () {
    function LoginComponent(router, nav) {
        this.router = router;
        this.nav = nav;
        this.credentials = {
            username: '',
            password: ''
        };
    }
    LoginComponent.prototype.login = function () {
        if (this.credentials.username === user_mock_1.USER.username && this.credentials.password === user_mock_1.USER.password) {
            this.nav.navigate(['lawla'], { clearHistory: true }); // clear history to avoid back to login 
        }
        else {
            alert("oho username or password are not valid");
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "login",
            moduleId: module.id,
            templateUrl: 'connexion.html',
        }),
        __metadata("design:paramtypes", [router_1.Router, router_2.RouterExtensions])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmV4aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29ubmV4aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDBDQUEyRDtBQUUzRCxrREFBNEM7QUFDNUMsc0RBQStEO0FBTy9EO0lBRUUsd0JBQTJCLE1BQWEsRUFBUyxHQUFvQjtRQUExQyxXQUFNLEdBQU4sTUFBTSxDQUFPO1FBQVMsUUFBRyxHQUFILEdBQUcsQ0FBaUI7UUFDbkUsSUFBSSxDQUFDLFdBQVcsR0FBRztZQUNqQixRQUFRLEVBQUMsRUFBRTtZQUNYLFFBQVEsRUFBQyxFQUFFO1NBQ1osQ0FBQTtJQUNILENBQUM7SUFFTSw4QkFBSyxHQUFaO1FBQ0UsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEtBQUssZ0JBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEtBQUssZ0JBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQSxDQUFDO1lBQzdGLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQyxDQUFDLHdDQUF3QztRQUM1RixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQztRQUNsRCxDQUFDO0lBQ0gsQ0FBQztJQWZVLGNBQWM7UUFMMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsZ0JBQWdCO1NBQzlCLENBQUM7eUNBR2tDLGVBQU0sRUFBYSx5QkFBZ0I7T0FGMUQsY0FBYyxDQW1CMUI7SUFBRCxxQkFBQztDQUFBLEFBbkJELElBbUJDO0FBbkJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uRXh0cmFzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiOyBcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi9tb2RlbC91c2VyLm1vZGVsXCI7XHJcbmltcG9ydCB7IFVTRVIgfSBmcm9tIFwiLi4vLi4vbW9jay91c2VyLm1vY2tcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJsb2dpblwiLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6ICdjb25uZXhpb24uaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XHJcbiAgcHVibGljIGNyZWRlbnRpYWxzOlVzZXI7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOlJvdXRlcixwcml2YXRlIG5hdjpSb3V0ZXJFeHRlbnNpb25zKSB7XHJcbiAgICB0aGlzLmNyZWRlbnRpYWxzID0ge1xyXG4gICAgICB1c2VybmFtZTonJyxcclxuICAgICAgcGFzc3dvcmQ6JydcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgcHVibGljIGxvZ2luKCkge1xyXG4gICAgaWYodGhpcy5jcmVkZW50aWFscy51c2VybmFtZSA9PT0gVVNFUi51c2VybmFtZSAmJiB0aGlzLmNyZWRlbnRpYWxzLnBhc3N3b3JkID09PSBVU0VSLnBhc3N3b3JkKXtcclxuICAgICAgdGhpcy5uYXYubmF2aWdhdGUoWydsYXdsYSddLHtjbGVhckhpc3Rvcnk6dHJ1ZX0pOyAvLyBjbGVhciBoaXN0b3J5IHRvIGF2b2lkIGJhY2sgdG8gbG9naW4gXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydChcIm9obyB1c2VybmFtZSBvciBwYXNzd29yZCBhcmUgbm90IHZhbGlkXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgXHJcbiAgXHJcbn1cclxuIl19