import { Injectable } from "@angular/core";
import { Address } from "../model/address.model";
import { StylesCompileDependency } from '@angular/compiler';

var Sqlite = require("nativescript-sqlite");

@Injectable()
export class DatabaseService {
	private createDB() {
		return new Promise((resolve, reject)=> {
			return (new Sqlite("addressbook.db")).then(db => {
				db.execSQL("CREATE TABLE IF NOT EXISTS address ( id INTEGER PRIMARY KEY AUTOINCREMENT,username TEXT,number TEXT)").then((id:any) => {
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
				res.execSQL("INSERT INTO address (username,number) VALUES (?,?)", [address.username,address.number]).then(id => {
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
							"username":rows[row][1],
							"number":rows[row][2]
						})
					}
					
					resolve(result); 
				}, error => {
					console.log("SELECT FAILED: ", error);
					reject(error);
				});
			});
		});
	}
  
  public remove(address:Address){
    return new Promise((resolve, reject)=> {
      this.createDB().then((res : any) => {
        res.execSQL("Delete FROM address WHERE username like ? and number like ?", [address.username,address.number]).then(id => {
          console.log("removed Result: ", id);
          resolve(true);
        }, error =>{
          console.log("Remove FAILED: ", error);
          reject(false);
        });
      });
    });
  }
  
  public update(address: Address){
    return new Promise((resolve, reject)=> {
      this.createDB().then((res : any) => {
        res.execSQL("update address set number=? where username like ? ", [address.number,address.username]).then(id => {
          console.log("update Result: ", id);
          resolve(true);
        }, error =>{
          console.log("update FAILED: ", error);
          reject(false);
        });
      });
    });
  }
}