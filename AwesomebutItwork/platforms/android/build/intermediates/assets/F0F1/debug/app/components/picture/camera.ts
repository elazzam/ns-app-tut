import { Component } from "@angular/core";
import { takePicture ,requestPermissions, isAvailable} from "nativescript-camera";
import * as imageSourceModule from "image-source";

import observable = require("data/observable");
import view = require("ui/core/view");
import pages = require("ui/page");
import tab = require("ui/tab-view");

var fs = require("file-system");

@Component({
  selector: "camera",
  templateUrl: './components/picture/camera.html'
})
export class CameraComponent {
	
	public myImage:any;
	
	constructor (){
	}
	public cheese(args: observable.EventData) {
		var milliseconds = (new Date).getTime();
		var that = this;
		var options = { width: 300, height: 300, keepAspectRatio: false, saveToGallery: true};
		this.onRequestPermissions();
		this.onCheckForCamera();
		
		
		
		
		
		
		takePicture(options)
		    .then((imageAsset) => {
		        let source = new imageSourceModule.ImageSource();
		        source.fromAsset(imageAsset).then((source) => {
		        	let folder = fs.KnownFolders.documents();
		        	var path = fs.path.join(folder.path, "SaveImage"+milliseconds+".png");
		        	var saved = source.saveToFile(path,"png");
		        	this.myImage = imageAsset;
		        	console.log(path);
		        })
		        
		    }).catch((err) => {
		        console.log("Error -> " + err.message);
		    });
	}
	
 	onRequestPermissions() {
        requestPermissions();
    }
    
    onCheckForCamera() {
        let isCameraAvailable = isAvailable();
        console.log("Is camera hardware available: " + isCameraAvailable);
    }
    
    	
	
	

	
}