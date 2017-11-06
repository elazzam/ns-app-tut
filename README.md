# ns-app-tut
# Nativescript Angular Web Starter
A simple starter project to create native mobile and web apps with single shared code base using angular2 and nativescript.

[![YouTube demo](http://tiepthithegioi.vn/wp-content/uploads/2017/03/Youtube_advertising_Google_AdWords.png)](https://www.youtube.com/watch?v=rsCT5fpES4Q "YouTube demo")
 

## Prerequisites
1. Globally installed Nativecript  - `npm install -g nativescript`
2. Globally installed Angular CLI - `npm install -g angular-cli`
3. Mac OS to build iOS app.

## Installation
1. `git clone https://github.com/shripalsoni04/nativescript-angular-web-starter --depth=1`
2. `cd nativescript-angular-web-starter`
3. `npm run ngxp-install` 

## Run Web application
`npm start` - This will start the application at http://localhost:4200. 

## Run iOS Application
`npm run start.ios` 

## Run Android Application
`npm run start.android`
  
## Project Folder Structure
**nativescript**

This contains a nativescript project for creating Android/iOS applications.

**tools**

This contains scripts useful during development.

**web**

This contains nothing but a web project created using `angular-cli`.

**x-shared**

All the code/assets which are common to both web and nativescript projects resides here. This folder is symlinked to `nativescript/app/x-shared` and `web/src/x-shared` folder. So changes in `x-shared` folder from any of the three locations will get reflected in other two folders.


## Commands
You can execute any valid command of angular-cli from `web/` folder and any valid command of nativescript-cli from `nativescript/` folder.
For convenince below are the commands which you can execute from root directory.

### Common
| Command                | Description                                                                                                                          |
|------------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| npm run ngxp-install   | Installs dependencies of web and nativescript applications. Creates symlink of x-shared folder in both web and nativescript project. |

### Web Application
| Command                | Description                                                                                                                        |
|------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| npm start              | Starts web application at http://localhost:4200                                                                                    |
| npm run start.prod     | Starts web application in production mode. Runs uglification and minification.                                                     |
| npm run start.aot      | Performs AOT for web application templates and starts web application.                                                             |
| npm run start.aot.prod | Performs AOT, minification, uglification and starts web application.                                                               |
| npm run build          | Builds the web application and copy the built project in web/dist folder.                                                          |
| npm run build.prod     | Builds the web application in production mode and copy the built project in web/dist folder.                                       |
| npm run build.aot      | Performs AOT, build the project and then copy the built project in web/dist folder.                                                |
| npm run build.aot.prod | Performs AOT, prepares production build and then copy the built project in web/dist folder.                                        |
| npm test               | Runs web application and x-shared unit test cases. It will not generate code coverage report.                                      |
| npm run test-cc        | Runs web application and x-shared unit test cases and generates code coverage report.                                              |
                                      

### Nativescript Application
| Command                  | Description                                                                                                                        |
|--------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| npm run start.ios        | Runs application on iOS emulator/device                                                                                            |
| npm run start.android    | Runs application on Android emulator/device                                                                                        |      

## FAQ
### How to change package/bundle id for Android/iOS apps?
To change the package/bundle id you need to do changes in below files.

1. `nativescript/package.json`
- Change `id` property of `nativescript` object as follows:

```
"nativescript": {
    "id": "com.domain.yourapp"
}
```

2. Open `nativescript/app/App_Resources/Android/app.gradle` file and change `applicationId` as shown below:

```
android {
  defaultConfig {
    ...
    applicationId = "com.domain.yourapp"
  }
  ...
}
```

### How to change Android and iOS Application Display Name?
**For Android**, open `nativescript/app/App_Resources/Android/values/strings.xml` file and write your app name where `Nativescript Angular Web Starter` is written:

```
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <string name="app_name">Nativescript Angular Web Starter</string>
    <string name="title_activity_kimera">Nativescript Angular Web Starter</string>
</resources>
```

**For iOS**, open `nativescript/app/App_Resources/iOS/info.plist` file and change value of `CFBundleDisplayName` and `CFBundleName` to your app name:

```
<dict>
  ...
  <key>CFBundleDisplayName</key>
	<string>Nativescript Angular Web Starter</string>
  <key>CFBundleName</key>
	<string>NativescriptAngularWebStarter</string>
  ...
</dict>
```
### How to use angular dependencies from common node_modules folder. (Not tested properly yet!)
Currently you can see that for web project, angular modules are there as dependencies in common package.json and at web/package.json. So currently to update version of angular modules for web project,
you need to update version at both of these package.json files. To avoid this, you can add path mapping in web project's tsconfig.json file as shown below:

`web/src/tsconfig.json`
```
"paths": {
  "@angular/*": ["../../node_modules/@angular/*"]
}
```

Once you add above configuration, the web project will try to find the @angular pacakges from common node_modules folder.

## Attributes
1. [Angular Framework](https://angular.io/)
2. [Nativescript Framework](http://nativescript.org/)
3. [Nativescript Core Theme](https://github.com/NativeScript/theme)
4. [nativescript-swiss-army-knife](https://github.com/TheOriginalJosh/nativescript-swiss-army-knife)
5. `tools/install.js` from [angular-advanced-seed](https://github.com/NathanWalker/angular-seed-advanced)

## Awesome Contributors
[ELAZZAM Abdeslam](https://github.com/elazzam)

