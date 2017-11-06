"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_camera_1 = require("nativescript-camera");
var imageSourceModule = require("image-source");
var fs = require("file-system");
var CameraComponent = (function () {
    function CameraComponent() {
    }
    CameraComponent.prototype.cheese = function (args) {
        var _this = this;
        var milliseconds = (new Date).getTime();
        var that = this;
        var options = { width: 300, height: 300, keepAspectRatio: false, saveToGallery: true };
        this.onRequestPermissions();
        this.onCheckForCamera();
        nativescript_camera_1.takePicture(options)
            .then(function (imageAsset) {
            var source = new imageSourceModule.ImageSource();
            source.fromAsset(imageAsset).then(function (source) {
                var folder = fs.KnownFolders.documents();
                var path = fs.path.join(folder.path, "SaveImage" + milliseconds + ".png");
                var saved = source.saveToFile(path, "png");
                _this.myImage = imageAsset;
                console.log(path);
            });
        }).catch(function (err) {
            console.log("Error -> " + err.message);
        });
    };
    CameraComponent.prototype.onRequestPermissions = function () {
        nativescript_camera_1.requestPermissions();
    };
    CameraComponent.prototype.onCheckForCamera = function () {
        var isCameraAvailable = nativescript_camera_1.isAvailable();
        console.log("Is camera hardware available: " + isCameraAvailable);
    };
    CameraComponent = __decorate([
        core_1.Component({
            selector: "camera",
            templateUrl: './components/picture/camera.html'
        }),
        __metadata("design:paramtypes", [])
    ], CameraComponent);
    return CameraComponent;
}());
exports.CameraComponent = CameraComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FtZXJhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FtZXJhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDJEQUFrRjtBQUNsRixnREFBa0Q7QUFPbEQsSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBTWhDO0lBSUM7SUFDQSxDQUFDO0lBQ00sZ0NBQU0sR0FBYixVQUFjLElBQTBCO1FBQXhDLGlCQTBCQztRQXpCQSxJQUFJLFlBQVksR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDeEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksT0FBTyxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBQyxDQUFDO1FBQ3RGLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBT3hCLGlDQUFXLENBQUMsT0FBTyxDQUFDO2FBQ2YsSUFBSSxDQUFDLFVBQUMsVUFBVTtZQUNiLElBQUksTUFBTSxHQUFHLElBQUksaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDakQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO2dCQUN4QyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUN6QyxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFdBQVcsR0FBQyxZQUFZLEdBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3RFLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMxQyxLQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztnQkFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQixDQUFDLENBQUMsQ0FBQTtRQUVOLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEdBQUc7WUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDO0lBRUEsOENBQW9CLEdBQXBCO1FBQ00sd0NBQWtCLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsMENBQWdCLEdBQWhCO1FBQ0ksSUFBSSxpQkFBaUIsR0FBRyxpQ0FBVyxFQUFFLENBQUM7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUF6Q1EsZUFBZTtRQUozQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLGtDQUFrQztTQUNoRCxDQUFDOztPQUNXLGVBQWUsQ0FnRDNCO0lBQUQsc0JBQUM7Q0FBQSxBQWhERCxJQWdEQztBQWhEWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IHRha2VQaWN0dXJlICxyZXF1ZXN0UGVybWlzc2lvbnMsIGlzQXZhaWxhYmxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWNhbWVyYVwiO1xyXG5pbXBvcnQgKiBhcyBpbWFnZVNvdXJjZU1vZHVsZSBmcm9tIFwiaW1hZ2Utc291cmNlXCI7XHJcblxyXG5pbXBvcnQgb2JzZXJ2YWJsZSA9IHJlcXVpcmUoXCJkYXRhL29ic2VydmFibGVcIik7XHJcbmltcG9ydCB2aWV3ID0gcmVxdWlyZShcInVpL2NvcmUvdmlld1wiKTtcclxuaW1wb3J0IHBhZ2VzID0gcmVxdWlyZShcInVpL3BhZ2VcIik7XHJcbmltcG9ydCB0YWIgPSByZXF1aXJlKFwidWkvdGFiLXZpZXdcIik7XHJcblxyXG52YXIgZnMgPSByZXF1aXJlKFwiZmlsZS1zeXN0ZW1cIik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJjYW1lcmFcIixcclxuICB0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy9waWN0dXJlL2NhbWVyYS5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FtZXJhQ29tcG9uZW50IHtcclxuXHRcclxuXHRwdWJsaWMgbXlJbWFnZTphbnk7XHJcblx0XHJcblx0Y29uc3RydWN0b3IgKCl7XHJcblx0fVxyXG5cdHB1YmxpYyBjaGVlc2UoYXJnczogb2JzZXJ2YWJsZS5FdmVudERhdGEpIHtcclxuXHRcdHZhciBtaWxsaXNlY29uZHMgPSAobmV3IERhdGUpLmdldFRpbWUoKTtcclxuXHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdHZhciBvcHRpb25zID0geyB3aWR0aDogMzAwLCBoZWlnaHQ6IDMwMCwga2VlcEFzcGVjdFJhdGlvOiBmYWxzZSwgc2F2ZVRvR2FsbGVyeTogdHJ1ZX07XHJcblx0XHR0aGlzLm9uUmVxdWVzdFBlcm1pc3Npb25zKCk7XHJcblx0XHR0aGlzLm9uQ2hlY2tGb3JDYW1lcmEoKTtcclxuXHRcdFxyXG5cdFx0XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0XHJcblx0XHRcclxuXHRcdHRha2VQaWN0dXJlKG9wdGlvbnMpXHJcblx0XHQgICAgLnRoZW4oKGltYWdlQXNzZXQpID0+IHtcclxuXHRcdCAgICAgICAgbGV0IHNvdXJjZSA9IG5ldyBpbWFnZVNvdXJjZU1vZHVsZS5JbWFnZVNvdXJjZSgpO1xyXG5cdFx0ICAgICAgICBzb3VyY2UuZnJvbUFzc2V0KGltYWdlQXNzZXQpLnRoZW4oKHNvdXJjZSkgPT4ge1xyXG5cdFx0ICAgICAgICBcdGxldCBmb2xkZXIgPSBmcy5Lbm93bkZvbGRlcnMuZG9jdW1lbnRzKCk7XHJcblx0XHQgICAgICAgIFx0dmFyIHBhdGggPSBmcy5wYXRoLmpvaW4oZm9sZGVyLnBhdGgsIFwiU2F2ZUltYWdlXCIrbWlsbGlzZWNvbmRzK1wiLnBuZ1wiKTtcclxuXHRcdCAgICAgICAgXHR2YXIgc2F2ZWQgPSBzb3VyY2Uuc2F2ZVRvRmlsZShwYXRoLFwicG5nXCIpO1xyXG5cdFx0ICAgICAgICBcdHRoaXMubXlJbWFnZSA9IGltYWdlQXNzZXQ7XHJcblx0XHQgICAgICAgIFx0Y29uc29sZS5sb2cocGF0aCk7XHJcblx0XHQgICAgICAgIH0pXHJcblx0XHQgICAgICAgIFxyXG5cdFx0ICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuXHRcdCAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciAtPiBcIiArIGVyci5tZXNzYWdlKTtcclxuXHRcdCAgICB9KTtcclxuXHR9XHJcblx0XHJcbiBcdG9uUmVxdWVzdFBlcm1pc3Npb25zKCkge1xyXG4gICAgICAgIHJlcXVlc3RQZXJtaXNzaW9ucygpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBvbkNoZWNrRm9yQ2FtZXJhKCkge1xyXG4gICAgICAgIGxldCBpc0NhbWVyYUF2YWlsYWJsZSA9IGlzQXZhaWxhYmxlKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJJcyBjYW1lcmEgaGFyZHdhcmUgYXZhaWxhYmxlOiBcIiArIGlzQ2FtZXJhQXZhaWxhYmxlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHRcclxuXHRcclxuXHRcclxuXHJcblx0XHJcbn0iXX0=