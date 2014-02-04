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
	"deep-jquery/clients/json"
], function(require, deep) {

	deep.jquery.addDomProtocols(); //need to be declared only once at init of your app
	deep.client.Swig.createDefault(); //need to be declared only once at init of your app
	deep.client.jquery.JSON.createDefault(); //need to be declared only once at init of your app

	console.log("app started");

	/*Step1*/
	// var view = deep.View({
	// 	how: "<b>This is the html of my view</b>",
	// 	where: "dom.replace::#content"
	// });

	// // /*Step2*/
	// // var view = deep.View({
	// // 	what: {
	// // 		name:"John Rambo"
	// // 	},
	// // 	how: function(context) {
	// // 		console.log("How", context, this);
	// // 		return "<b>Hello " + context.name + "</b>";
	// // 	},
	// // 	where: "dom.replace::#content"
	// // });

	// /*Step3*/
	// // var view = deep.View({
	// // 	what: {
	// // 		fullName: "John Rambo"
	// // 	},
	// // 	how: "swig::/templates/simple-template.html",
	// // 	where: "dom.replace::#content"
	// // });
	// /*Step4 and 5*/
	// // var view = deep.View({
	// // 	what: "json::/json/profile.json",
	// // 	how: "swig::/templates/simple-template.html",
	// // 	where: "dom.replace::#content",
	// // 	done: function (argument) {
	// // 		$("#fullname-span").click(function () {
	// // 			window.alert("You clicked on a name");
	// // 		});
	// // 	}
	// // });
	// view.refresh();
	// creating stores and protocoles
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

});