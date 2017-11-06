"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Sqlite = require("nativescript-sqlite");
var DatabaseService = (function () {
    function DatabaseService() {
    }
    DatabaseService.prototype.createDB = function () {
        return new Promise(function (resolve, reject) {
            return (new Sqlite("addressbook.db")).then(function (db) {
                db.execSQL("CREATE TABLE IF NOT EXISTS address ( id INTEGER PRIMARY KEY AUTOINCREMENT,username TEXT,number TEXT)").then(function (id) {
                    resolve(db);
                }, function (error) {
                    console.log("CREATE TABLE address ERROR ", error);
                    reject(error);
                });
            }, function (error) {
                reject(error);
            });
        });
    };
    DatabaseService.prototype.insert = function (address) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.createDB().then(function (res) {
                res.execSQL("INSERT INTO address (username,number) VALUES (?,?)", [address.username, address.number]).then(function (id) {
                    console.log("INSERT Result: ", id);
                    resolve(true);
                }, function (error) {
                    console.log("INSERT FAILED: ", error);
                    reject(false);
                });
            });
        });
    };
    DatabaseService.prototype.selectAll = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.createDB().then(function (res) {
                return res.all("SELECT * FROM address").then(function (rows) {
                    var result = [];
                    for (var row in rows) {
                        result.push({
                            "username": rows[row][1],
                            "number": rows[row][2]
                        });
                    }
                    resolve(result);
                }, function (error) {
                    console.log("SELECT FAILED: ", error);
                    reject(error);
                });
            });
        });
    };
    DatabaseService.prototype.remove = function (address) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.createDB().then(function (res) {
                res.execSQL("Delete FROM address WHERE username like ? and number like ?", [address.username, address.number]).then(function (id) {
                    console.log("removed Result: ", id);
                    resolve(true);
                }, function (error) {
                    console.log("Remove FAILED: ", error);
                    reject(false);
                });
            });
        });
    };
    DatabaseService.prototype.update = function (address) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.createDB().then(function (res) {
                res.execSQL("update address set number=? where username like ? ", [address.number, address.username]).then(function (id) {
                    console.log("update Result: ", id);
                    resolve(true);
                }, function (error) {
                    console.log("update FAILED: ", error);
                    reject(false);
                });
            });
        });
    };
    DatabaseService = __decorate([
        core_1.Injectable()
    ], DatabaseService);
    return DatabaseService;
}());
exports.DatabaseService = DatabaseService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJhc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGFiYXNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFJM0MsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFHNUM7SUFBQTtJQStFQSxDQUFDO0lBOUVRLGtDQUFRLEdBQWhCO1FBQ0MsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDbEMsTUFBTSxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEVBQUU7Z0JBQzVDLEVBQUUsQ0FBQyxPQUFPLENBQUMsc0dBQXNHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxFQUFNO29CQUM5SCxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ2IsQ0FBQyxFQUFFLFVBQUEsS0FBSztvQkFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixFQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNqRCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2YsQ0FBQyxDQUFDLENBQUM7WUFDSixDQUFDLEVBQUUsVUFBQSxLQUFLO2dCQUNQLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNmLENBQUMsQ0FBQyxDQUFBO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFFSCxDQUFDO0lBRU0sZ0NBQU0sR0FBYixVQUFjLE9BQWdCO1FBQTlCLGlCQVlDO1FBWEEsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDbEMsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVM7Z0JBQzlCLEdBQUcsQ0FBQyxPQUFPLENBQUMsb0RBQW9ELEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFDLE9BQU8sQ0FBQyxNQUFNLENB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QUNuQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2hCLENBQUMsRUFBRSxVQUFBLEtBQUs7b0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDdEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNoQixDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBOUVVLGVBQWU7UUFEM0IsaUJBQVUsRUFBRTtPQUNBLGVBQWUsQ0ErRTNCO0lBQUQsc0JBQUM7Q0FBQSxBQS9FRCxJQStFQztBQS9FWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBZGRyZXNzIH0gZnJvbSBcIi4uL21vZGVsL2FkZHJlc3MubW9kZWxcIjtcclxuaW1wb3J0IHsgU3R5bGVzQ29tcGlsZURlcGVuZGVuY3kgfSBmcm9tICdAYW5ndWxhci9jb21waWxlcic7XHJcblxyXG52YXIgU3FsaXRlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1zcWxpdGVcIik7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEYXRhYmFzZVNlcnZpY2Uge1xyXG5cdHByaXZhdGUgY3JlYXRlREIoKSB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PiB7XHJcblx0XHRcdHJldHVybiAobmV3IFNxbGl0ZShcImFkZHJlc3Nib29rLmRiXCIpKS50aGVuKGRiID0+IHtcclxuXHRcdFx0XHRkYi5leGVjU1FMKFwiQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgYWRkcmVzcyAoIGlkIElOVEVHRVIgUFJJTUFSWSBLRVkgQVVUT0lOQ1JFTUVOVCx1c2VybmFtZSBURVhULG51bWJlciBURVhUKVwiKS50aGVuKChpZDphbnkpID0+IHtcclxuXHRcdFx0XHRcdHJlc29sdmUoZGIpO1xyXG5cdFx0XHRcdH0sIGVycm9yID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiQ1JFQVRFIFRBQkxFIGFkZHJlc3MgRVJST1IgXCIsZXJyb3IpO1xyXG5cdFx0XHRcdFx0cmVqZWN0KGVycm9yKTtcclxuXHRcdFx0XHR9KTtcdFxyXG5cdFx0XHR9LCBlcnJvciA9PiB7XHJcblx0XHRcdFx0cmVqZWN0KGVycm9yKTtcclxuXHRcdFx0fSlcclxuXHRcdH0pXHJcblx0XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBpbnNlcnQoYWRkcmVzczogQWRkcmVzcyl7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PiB7XHJcblx0XHRcdHRoaXMuY3JlYXRlREIoKS50aGVuKChyZXMgOiBhbnkpID0+IHtcclxuXHRcdFx0XHRyZXMuZXhlY1NRTChcIklOU0VSVCBJTlRPIGFkZHJlc3MgKHVzZXJuYW1lLG51bWJlcikgVkFMVUVTICg/LD8pXCIsIFthZGRyZXNzLnVzZXJuYW1lLGFkZHJlc3MubnVtYmVyXSkudGhlbihpZCA9PiB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIklOU0VSVCBSZXN1bHQ6IFwiLCBpZCk7XHJcblx0XHRcdFx0XHRyZXNvbHZlKHRydWUpO1xyXG5cdFx0XHRcdH0sIGVycm9yID0+e1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJJTlNFUlQgRkFJTEVEOiBcIiwgZXJyb3IpO1xyXG5cdFx0XHRcdFx0cmVqZWN0KGZhbHNlKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0XHJcblx0cHVibGljIHNlbGVjdEFsbCgpIHtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+IHtcclxuXHRcdFx0dGhpcy5jcmVhdGVEQigpLnRoZW4oKHJlcyA6IGFueSkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiByZXMuYWxsKFwiU0VMRUNUICogRlJPTSBhZGRyZXNzXCIpLnRoZW4ocm93cyA9PiB7XHJcblx0XHRcdFx0XHRsZXQgcmVzdWx0OiBBZGRyZXNzW10gPSBbXTtcclxuXHRcdFx0XHRcdGZvcihsZXQgcm93IGluIHJvd3MpIHtcclxuXHRcdFx0XHRcdFx0cmVzdWx0LnB1c2goe1xyXG5cdFx0XHRcdFx0XHRcdFwidXNlcm5hbWVcIjpyb3dzW3Jvd11bMV0sXHJcblx0XHRcdFx0XHRcdFx0XCJudW1iZXJcIjpyb3dzW3Jvd11bMl1cclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0cmVzb2x2ZShyZXN1bHQpOyBcclxuXHRcdFx0XHR9LCBlcnJvciA9PiB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIlNFTEVDVCBGQUlMRUQ6IFwiLCBlcnJvcik7XHJcblx0XHRcdFx0XHRyZWplY3QoZXJyb3IpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuICBcclxuICBwdWJsaWMgcmVtb3ZlKGFkZHJlc3M6QWRkcmVzcyl7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PiB7XHJcbiAgICAgIHRoaXMuY3JlYXRlREIoKS50aGVuKChyZXMgOiBhbnkpID0+IHtcclxuICAgICAgICByZXMuZXhlY1NRTChcIkRlbGV0ZSBGUk9NIGFkZHJlc3MgV0hFUkUgdXNlcm5hbWUgbGlrZSA/IGFuZCBudW1iZXIgbGlrZSA/XCIsIFthZGRyZXNzLnVzZXJuYW1lLGFkZHJlc3MubnVtYmVyXSkudGhlbihpZCA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInJlbW92ZWQgUmVzdWx0OiBcIiwgaWQpO1xyXG4gICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICB9LCBlcnJvciA9PntcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVtb3ZlIEZBSUxFRDogXCIsIGVycm9yKTtcclxuICAgICAgICAgIHJlamVjdChmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIFxyXG4gIHB1YmxpYyB1cGRhdGUoYWRkcmVzczogQWRkcmVzcyl7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PiB7XHJcbiAgICAgIHRoaXMuY3JlYXRlREIoKS50aGVuKChyZXMgOiBhbnkpID0+IHtcclxuICAgICAgICByZXMuZXhlY1NRTChcInVwZGF0ZSBhZGRyZXNzIHNldCBudW1iZXI9PyB3aGVyZSB1c2VybmFtZSBsaWtlID8gXCIsIFthZGRyZXNzLm51bWJlcixhZGRyZXNzLnVzZXJuYW1lXSkudGhlbihpZCA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInVwZGF0ZSBSZXN1bHQ6IFwiLCBpZCk7XHJcbiAgICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICAgIH0sIGVycm9yID0+e1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJ1cGRhdGUgRkFJTEVEOiBcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgcmVqZWN0KGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0iXX0=