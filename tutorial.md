#Getting started with deep

## 1. Setting up the app project :

You'll need Git, which you can get from the Git site.

Clone the *getting-started-with-deep* repository located at Github by running the following command:
```shell
git clone https://github.com/deepjs/getting-started-with-deep.git 
```
This command creates the *getting-started-with-deep* directory in your current directory.

Change your current directory to *getting-started-with-deep*:
```shell
cd getting-started-with-deep
```
The tutorial instructions, from now on, assume you are running all commands from the *getting-started-with-deep directory*.

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

All the server configuration files (routes map, RESTful services, statics) are in the */server_config* folder. We will go back to these later when will add stuff to the server. For now let's go to something visual. 

### Open a browser window for the app and navigate to **http://localhost:3000/**

You can now see a page in your browser. It's not very exciting, but that's OK.

The HTML page that displays *"Nothing here yet!"* was constructed with the HTML code shown below. I'm sure I don't have to explain it. Just mention that we load a css, jquery, swig (that is our templating engine but you will see you could use yours), Jstorage (not required but necessary for this tutorial later as we would use it to access the local storage).

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

This line is loading require.js and launch our *app.js* script located in /www/app.js (remember we serve /www under / in the statics map)
```html
<script data-main="./app.js" src="./libs/requirejs/require.js"></script>
```

### 3. Experiments to learn

So now that you know how to install and start the server, let's go for implementing some cool things in our application.

First let's have a look to our main *app.js* file :

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
So what our app does for now? Only outputing *"app started"* in your browser console. And that's it !. Ok this is not very exciting, we should start to implement a real view!

Add this code to the *app.js* file just after the console.log() and refresh your browser :
```javascript
deep.jquery.addDomProtocols(); //need to be declared only once at init of your app

var view = deep.View({
	how: "<b>Hello my friend</b>",
	where: "dom.htmlOf::#content"
});

view.refresh();
```
You see the html as changed, and you have your first view saying hello to you. Wonderful!

Some words about these lines :

The **deep.jquery.addDomProtocols();** line give you access to protocols that let you manipulate the DOM with JQuery through deep. We will discuss more on deepjs protocols later as this is more advanced. But for now, just accept that this line create and give you access to these protocols :

* dom.appendTo::argument //append the html to the jquery node
* dom.prependTo::argument //prepend the html to the jquery node
* dom.htmlOf::argument //replace the html inside the jquery node
* dom.replace::argument //replace the jquery node with the html

the argument is a jquery selector.

Next we create the view with the **deep.View()** factory. A deep.View object needs minimum 2 properties so it could print something to the browser :

* **how** : It could be a string or a function. It is *HOW* you want to produce your html. For the first example it is a string containing the html that we want to print. 
* **where** : Where is the way and the place *WHERE* you want to put the render string comming from the how property. This is where you will use jquery protocols. The basic usage is :

protocol::argument

In this case **dom.htmlOf::#content** will insert the string of the *"how"* property in the tag with id="content".

Finally, the **view.refresh();** command is the one that launch the action to put the *"how"* in the *"where"*. And so that make the magic of showing a view in your app. Pheeew.

Not impressed? Me neither! Let's do more.

Let's try the function way for the *how* of my view :

Modify the *how* of your view like this:
```javascript
var view = deep.View({
	how: function (what) {
		return "<b>Hello my friend</b>";
	},
	where: "dom.replace::#content"
});
```
Test it. It Still saying hello to you because your function return the same string as before. But you noticed the **what** argument in the function, and you want to use it. So you must know where does this **what** come from, that introduces the third property of a deep.View() :

* **what** : an object or a function that will be the context injected in the *how*

Modify your view to use the *what* like this :
```javascript
var view = deep.View({
	what: {
		fullName:"John Rambo"
	},
	how: function (what) {
		return "<b>Hello " + what.fullName + "</b>";
	},
	where: "dom.replace::#content"
});
```
Test it. And it don't say hello to you, but to John Rambo. Don't know for you but me I'm impressed. This is not anyone!
I'm hearing people saying "hey, what about using a real templating engine?". Ok let me show you ho to do this :

We will use a protocol for that, so first we have to create it. Just add this line before your view declaration : 
```javascript
deep.client.Swig.createDefault();
```
The **deep.client.Swig.createDefault();** line give you access to the **swig::argument** protocol. The argument this protocol needs, is a path to a html swig template.

Modify your view to use it :
```javascript
var view = deep.View({
	what: {
		fullName:"John Rambo"
	},
	how: "swig::/templates/simple-template.html",
	where: "dom.replace::#content"
});
```
So the swig::/templates/simple-template.html protocol returns a function that receive the **what** as argument. Exactly like the preview example.

A thing that could be really cool is to load data in the **what** from an external source. A json file. Ok you begin to know the principle, we will have the need of a json:: protocol, that will make the ajax call for us. Easy, just add this line before the view declaration.
```javascript
deep.client.jquery.JSON.createDefault();
```
The **deep.client.jquery.JSON.createDefault();** line give you access to the **json::argument** protocol. The argument this protocol needs, is a path to a json file.

Modify your view to use it :
```javascript
var view = deep.View({
	what: "json::/json/profile.json",
	how: "swig::/templates/simple-template.html",
	where: "dom.replace::#content"
});
```
Test it and you should see a different name (the one coming from the json). This impressed me! You introduce asynchrone code and all is managed for you. The template is rendered after the asynchrone loading of the datas.

Last thing you can ask for now is to have a possibility to launch your own code after the view is rendered. Like putting behaviour on your button's click event or showing/hiding or whatever...This is the fourth property of a deep.View :

* **done** a function that is executed after the rendering

Let's have a look : Modify your view like this :
```javascript
var view = deep.View({
	what: "json::/json/profile.json",
	how: "swig::/templates/simple-template.html",
	where: "dom.replace::#content",
	done: function (argument) {
		$("#fullname-span").click(function () {
			window.alert("You clicked on a name");
		});
	}
});
```
Test it and click on the name, you should see an alert window saying that you have clicked on a name.
That's it, you just put a click behaviour on a html element. So you're free now to do what you want to do with your html after the rendering. Notice the argument the done receive, it will contain some useful stuff like the contain of the *what*, the jquery node of the html rendered, the html rendered, etc. If you need more info on that, see the Deep.View doc (//TODO docs view link).

Let's recap what you learned about the deep.View : 

* you know how to create a view and how to use the what, how, where, done property of the view.
* you know how to create the json::, swig:: and the dom.xxx:: protocols and how to use them for loading json data, rendering a template using the swig engine and insert the result in your page.
* you know how to launch the render of a view using it's refresh() function.

This is the right moment to make a break.









