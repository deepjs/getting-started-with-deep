#Getting started with deep

## 1. Setting up the app project :

You'll need Git, which you can get from the Git site.

Clone the getting-started-with-deep repository located at Github by running the following command:
```shell
git clone https://github.com/deepjs/getting-started-with-deep.git 
```
This command creates the getting-started-with-deep/ directory in your current directory.

Change your current directory to getting-started-with-deep:
```shell
cd getting-started-with-deep
```
The tutorial instructions, from now on, assume you are running all commands from the getting-started-with-deep directory.

You will also need Node.js, so please verify that you have Node.js v0.10 or better installed and that the node executable is on your PATH by running the following command in a terminal window:
```shell
node --version
```
Now that you have Node.js ready you can run these 2 commands to get all the dependent packages 
```shell
npm install
```
This command install the node's needed packages in /node_modules
```shell
bower install
```
This command install the browser needed packages in /www/libs

The last thing to do is to make sure your computer has a web browser and a good text editor installed. Now, let's get some cool stuff done!

You are now ready to build the deepjs example application. In this step, you will become familiar with the most important source code files, learn how to start the nodejs server, and run the application in the browser.

## 2. Running a deepjs application

### Launch the nodejs server

run the following command in a terminal window:
```shell
node index.js
```
This command launch the server and output :
```shell
server is listening on port :  3000
node via stdin> 
```
The first line means your webserver is started and is listening to port 3000.
The second is a repl access to node, so you can type direct command if needed (more on this later).
You will see all the server logs in this terminal window.

All the server configuration files (routes map, RESTful services, statics) are in the /server_config/ folder. We will go back to these later when will add stuff to the server. For now let's go to something visual. 

### Open a browser window for the app and navigate to http://localhost:3000/

You can now see a page in your browser. It's not very exciting, but that's OK.

The HTML page that displays "Nothing here yet!" was constructed with the HTML code shown below. I'm sure I don't have to explain it. Just mention that we load a css, jquery, swig (that is our templating engine but you will see you could use yours), Jstorage (not required but necessary for this tutorial later as we would use it to access the local storage).

www/index.html:
```html
<!DOCTYPE html>
<html>
<head>
	<title>Getting started with deep</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<link rel="stylesheet" type="text/css" href="./libs/bootstrap/dist/css/bootstrap.css">
</head>
<body>
	<div id="content">Nothing here yet!</div>
  	<script src="./libs/jquery/jquery.min.js"></script>
  	<script src="./libs/swig.min.js"></script>
  	<script src="./libs/jStorage/jstorage.min.js"></script>
  	<script data-main="./app.js" src="./libs/requirejs/require.js"></script>
</body>
</html>
```

This line is loading require.js and launch our app.js script located in /www/app.js (remember we serve /www under / in the statics map)
```html
<script data-main="./app.js" src="./libs/requirejs/require.js"></script>
```

### 3. Experiments to learn

So now that you know how to install and start the server, let's go for implementing some cool things in our application.

First let's have a look to our main app.js file :

```javascript
require.config({
	baseUrl: "./libs",
	catchError: true
});
define([
	"require",
	"deepjs/deep",
	"deepjs/lib/view",
	"deep-swig/index",
	"deep-jquery/index",
	"deep-jquery/clients/json",
	"deepjs/lib/unit",
	"deep-data-bind/json-binder",
	"deep-widgets/index",
	"deep-routes/parser"
], function(require, deep) {
	
	console.log("app started");

});
```
For now, just ignore the require.config and the modules we load in the define (they will be necessary in further steps in this tutorial). If you want more info on how the modules are managed by require.js, got to the require.js website.
So what our app does for now? Only outputing "app started" in your browser console. And that's it !. Ok this is not very exciting, we should start to implement a real view !






