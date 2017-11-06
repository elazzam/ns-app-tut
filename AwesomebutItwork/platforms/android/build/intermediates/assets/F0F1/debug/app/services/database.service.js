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
                db.execSQL("CREATE TABLE IF NOT EXISTS address ( id INTEGER PRIMARY KEY AUTOINCREMENT,username TEXT,number TEXT)").then(function (db) {
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
                res.exeSQL("INSERT INTO address (username,number) VALUES (?,?)", [address.username, address.number]).then(function (id) {
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
                            "username": row[1],
                            "number": row[2]
                        });
                    }
                    resolve(result); // resolve c'est retourner 
                }, function (error) {
                    console.log("SELECT FAILED: ", error);
                    reject(error);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJhc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGFiYXNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFHM0MsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFHNUM7SUFBQTtJQW1EQSxDQUFDO0lBbERRLGtDQUFRLEdBQWhCO1FBQ0MsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDbEMsTUFBTSxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEVBQUU7Z0JBQzVDLEVBQUUsQ0FBQyxPQUFPLENBQUMsc0dBQXNHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxFQUFFO29CQUN6SCxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ2IsQ0FBQyxFQUFFLFVBQUEsS0FBSztvQkFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixFQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNqRCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2YsQ0FBQyxDQUFDLENBQUM7WUFDSixDQUFDLEVBQUUsVUFBQSxLQUFLO2dCQUNQLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNmLENBQUMsQ0FBQyxDQUFBO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFFSCxDQUFDO0lBRU0sZ0NBQU0sR0FBYixVQUFjLE9BQWdCO1FBQTlCLGlCQVlDO1FBWEEsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDbEMsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVM7Z0JBQzlCLEdBQUcsQ0FBQyxNQUFNLENBQUMsb0RBQW9ELEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEVBQUU7b0JBQzFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUFDLENBQUM7b0JBQ25DLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDZixDQUFDLEVBQUUsVUFBQSxLQUFLO29CQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBQ3RDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDZixDQUFDLENBQUMsQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRU0sbUNBQVMsR0FBaEI7UUFBQSxpQkFtQkM7UUFsQkEsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDbEMsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVM7Z0JBQzlCLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSTtvQkFDaEQsSUFBSSxNQUFNLEdBQWMsRUFBRSxDQUFDO29CQUMzQixHQUFHLENBQUEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDOzRCQUNYLFVBQVUsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOzRCQUNqQixRQUFRLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzt5QkFDZixDQUFDLENBQUE7b0JBQ0gsQ0FBQztvQkFFRCxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQywyQkFBMkI7Z0JBQzdDLENBQUMsRUFBRSxVQUFBLEtBQUs7b0JBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDdEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNmLENBQUMsQ0FBQyxDQUFDO1lBQ0osQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFsRFcsZUFBZTtRQUQzQixpQkFBVSxFQUFFO09BQ0EsZUFBZSxDQW1EM0I7SUFBRCxzQkFBQztDQUFBLEFBbkRELElBbURDO0FBbkRZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFkZHJlc3MgfSBmcm9tIFwiLi4vbW9kZWwvYWRkcmVzcy5tb2RlbFwiO1xyXG5cclxudmFyIFNxbGl0ZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtc3FsaXRlXCIpO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGF0YWJhc2VTZXJ2aWNlIHtcclxuXHRwcml2YXRlIGNyZWF0ZURCKCkge1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT4ge1xyXG5cdFx0XHRyZXR1cm4gKG5ldyBTcWxpdGUoXCJhZGRyZXNzYm9vay5kYlwiKSkudGhlbihkYiA9PiB7XHJcblx0XHRcdFx0ZGIuZXhlY1NRTChcIkNSRUFURSBUQUJMRSBJRiBOT1QgRVhJU1RTIGFkZHJlc3MgKCBpZCBJTlRFR0VSIFBSSU1BUlkgS0VZIEFVVE9JTkNSRU1FTlQsdXNlcm5hbWUgVEVYVCxudW1iZXIgVEVYVClcIikudGhlbihkYiA9PiB7XHJcblx0XHRcdFx0XHRyZXNvbHZlKGRiKTtcclxuXHRcdFx0XHR9LCBlcnJvciA9PiB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIkNSRUFURSBUQUJMRSBhZGRyZXNzIEVSUk9SIFwiLGVycm9yKTtcclxuXHRcdFx0XHRcdHJlamVjdChlcnJvcik7XHJcblx0XHRcdFx0fSk7XHRcclxuXHRcdFx0fSwgZXJyb3IgPT4ge1xyXG5cdFx0XHRcdHJlamVjdChlcnJvcik7XHJcblx0XHRcdH0pXHJcblx0XHR9KVxyXG5cdFxyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgaW5zZXJ0KGFkZHJlc3M6IEFkZHJlc3Mpe1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT4ge1xyXG5cdFx0XHR0aGlzLmNyZWF0ZURCKCkudGhlbigocmVzIDogYW55KSA9PiB7XHJcblx0XHRcdFx0cmVzLmV4ZVNRTChcIklOU0VSVCBJTlRPIGFkZHJlc3MgKHVzZXJuYW1lLG51bWJlcikgVkFMVUVTICg/LD8pXCIsIFthZGRyZXNzLnVzZXJuYW1lLGFkZHJlc3MubnVtYmVyXSkudGhlbihpZCA9PiB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIklOU0VSVCBSZXN1bHQ6IFwiLCBpZCk7XHJcblx0XHRcdFx0XHRyZXNvbHZlKHRydWUpO1xyXG5cdFx0XHRcdH0sIGVycm9yID0+e1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJJTlNFUlQgRkFJTEVEOiBcIiwgZXJyb3IpO1xyXG5cdFx0XHRcdFx0cmVqZWN0KGZhbHNlKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0XHJcblx0cHVibGljIHNlbGVjdEFsbCgpIHtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+IHtcclxuXHRcdFx0dGhpcy5jcmVhdGVEQigpLnRoZW4oKHJlcyA6IGFueSkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiByZXMuYWxsKFwiU0VMRUNUICogRlJPTSBhZGRyZXNzXCIpLnRoZW4ocm93cyA9PiB7XHJcblx0XHRcdFx0XHRsZXQgcmVzdWx0OiBBZGRyZXNzW10gPSBbXTtcclxuXHRcdFx0XHRcdGZvcihsZXQgcm93IGluIHJvd3MpIHtcclxuXHRcdFx0XHRcdFx0cmVzdWx0LnB1c2goe1xyXG5cdFx0XHRcdFx0XHRcdFwidXNlcm5hbWVcIjpyb3dbMV0sXHJcblx0XHRcdFx0XHRcdFx0XCJudW1iZXJcIjpyb3dbMl1cclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0cmVzb2x2ZShyZXN1bHQpOyAvLyByZXNvbHZlIGMnZXN0IHJldG91cm5lciBcclxuXHRcdFx0XHR9LCBlcnJvciA9PiB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIlNFTEVDVCBGQUlMRUQ6IFwiLCBlcnJvcik7XHJcblx0XHRcdFx0XHRyZWplY3QoZXJyb3IpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxufSJdfQ==