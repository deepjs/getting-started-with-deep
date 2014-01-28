if(typeof define !== 'function'){
	var define = require('amdefine')(module);
}

define(["require", "deepjs/deep"], function(require, deep){

	var HTMLroutes = {
		"/":{
			page:"swig::./www/index.html",
			context:{
			}
		}
	};

	return HTMLroutes;
});