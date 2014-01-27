var express = require('express'),
	deep = require("deepjs"),
	autobahn = require("autobahnjs");

require("deepjs/lib/unit");

// important so set it before create default json or swig store. they will use it as default root.
deep.globals.rootPath = __dirname+"/";

require("deep-node/lib/stores/fs/json").createDefault();// allow to load or post/put/patch/del json files with deep("json::/path/from/root/file.json").log() or deep.store("json").post({ aProp:true }, { id:"/path/from/root/output.json"}).log()
require("deep-swig").createDefault(); // allow to load swigjs template files with deep("swig::/path/from/root/file.html").log()

//_________________________________________________________ MAPS DEFINITION 
// this is a map of restful services. it will be used below in related middleware (autobahn.restful). each entry associate a route to a store.
var services = {
	// services respond to routes described in expressjs route format. 
};

// map for html pages produced by server
var htmls = {
	// same thing than for restful services : route is describe by expressjs route format.
	// here we serve an index on /. it's produce from pointed swig template with provided context
	// (each entry could be an OCManager)
	"/":{
		page:"swig::./www/index.html"
	}
};

// map for static files served by server
var statics = {
	"/":[ { path:__dirname + '/www', options:{ maxAge: 86400000, redirect:false } } ]
};

//_________________________________________________________ END MAPS DEFINITION 
//______________________________________________________________________________


//_________________________ Start your app construction
var app = express();

app
.use(autobahn.context.middleware())	// set deep.context for each request
.use(express.bodyParser())
///____________________________________________________  USE YOUR MAPS
.use(autobahn.html.simpleMap(htmls))
.use(autobahn.restful.map(services))
.use(autobahn.statics.middleware(statics))
///____________________________________________________      Finish app construction
.use(app.router)
.use(function(req, res, next){
	console.log("nothing to do with : ", req.url);
	res.writeHead(404, {'Content-Type': 'text/html'});
	res.end("error : 404");
})
.listen(3000);
//_______________________________________________________  END app construction

console.log("server is listening on port : ", 3000);

var  repl = require("repl");
repl.start({
	prompt: "node via stdin> ",
	input: process.stdin,
	output: process.stdout
});
