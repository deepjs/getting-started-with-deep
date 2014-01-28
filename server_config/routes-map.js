if(typeof define !== 'function'){
	var define = require('amdefine')(module);
}

define(["require", "deepjs/deep"], function(require, deep){

	var routesMap = {
		"/":{
			page:"swig::./www/index.html",
			context:{
			}
		}
	};

	return routesMap;
});