if(typeof define !== 'function'){
	var define = require('amdefine')(module);
}
define(["require", "deepjs/deep"], function(require,deep){

	var restfulServices = {
		"/campaign/:id?":deep.store.Collection.create("campaign",[{ id:"e1", title:"First campaign"}],{})
	};

	return restfulServices;
});