if(typeof define !== 'function'){
	var define = require('amdefine')(module);
}
define(["require", "deepjs/deep"], function(require, deep){

	var statics = {
		"/":[ { path:deep.globals.rootPath + '/www', options:{ maxAge: 86400000, redirect:false } } ]
	};

	return statics;
});