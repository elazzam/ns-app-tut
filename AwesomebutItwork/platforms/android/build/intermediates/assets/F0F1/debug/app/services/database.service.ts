import { Injectable } from "@angular/core";
import { Address } from "../model/address.model";

var Sqlite = require("nativescript-sqlite");

@Injectable()
export class DatabaseService {
	private createDB() {
		return new Promise((resolve, reject)=> {
			return (new Sqlite("addressbook.db")).then(db => {
				db.execSQL("CREATE TABLE IF NOT EXISTS address ( id INTEGER PRIMARY KEY AUTOINCREMENT,username TEXT,number TEXT)").then(db => {
					resolve(db);
				}, error => {
					console.log("CREATE TABLE address ERROR ",error);
					reject(error);
				});	
			}, error => {
				reject(error);
			})
		})
	
	}
	
	public insert(address: Address){
		return new Promise((resolve, reject)=> {
			this.createDB().then((res : any) => {
				res.exeSQL("INSERT INTO address (username,number) VALUES (?,?)", [address.username,address.number]).then(id => {
					console.log("INSERT Result: ", id);
					resolve(true);
				}, error =>{
					console.log("INSERT FAILED: ", error);
					reject(false);
				});
			});
		});
	}
	
	public selectAll() {
		return new Promise((resolve, reject)=> {
			this.createDB().then((res : any) => {
				return res.all("SELECT * FROM address").then(rows => {
					let result: Address[] = [];
					for(let row in rows) {
						result.push({
							"username":row[1],
							"number":row[2]
						})
					}
					
					resolve(result); // resolve c'est retourner 
				}, error => {
					console.log("SELECT FAILED: ", error);
					reject(error);
				});
			});
		});
	}
}