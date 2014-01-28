/**
 * @author Gilles Coomans <gilles.coomans@gmail.com> 
 * @contributors Philippe Delabye <phil@chemicalrules.net>
THIS IS THE VIEW MAIN APP : so for browser side.
 */
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

	deep.jquery.addDomProtocols();
	deep.client.Swig.createDefault();

	/*Step1*/
	// var view = deep.View({
	// 	how: "<b>This is the html of my view</b>",
	// 	where: "dom.replace::#content"
	// });

	// /*Step2*/
	// var view = deep.View({
	// 	what: {
	// 		name:"John Rambo"
	// 	},
	// 	how: function(context) {
	// 		console.log("How", context, this);
	// 		return "<b>Hello " + context.name + "</b>";
	// 	},
	// 	where: "dom.replace::#content"
	// });

	/*Step3*/
	var view = deep.View({
		what: {
			fullName: "John Rambo"
		},
		how: "swig::/templates/simple-template.html",
		where: "dom.replace::#content"
	});
	view.refresh();
	// creating stores and protocoles
	// deep.client.jquery.JSON.createDefault();
	// // Dummies service
	// deep.store.Collection.create("myobjects", [{
	// 	id: 'e1',
	// 	title: "hello world"
	// }, {
	// 	id: 'e2',
	// 	title: "hello deepjs"
	// }], {
	// 	properties: {
	// 		title: {
	// 			type: "string",
	// 			description:"the title of my mp3",
	// 			minLength: 4,
	// 			required: true
	// 		}
	// 	}
	// });

	// var view = deep.View({
	// 	what: "json::/json/test.json",
	// 	how: "swig::/templates/simple.html",
	// 	where: "dom.replace::#content"
	// });

	//view.refresh();
	console.log("app started");

});