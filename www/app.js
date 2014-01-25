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

	// creating stores and protocoles
	deep.client.jquery.JSON.createDefault();
	deep.client.Swig.createDefault();
	deep.jquery.addDomProtocols();
	// Dummies service
	deep.store.Collection.create("myobjects", [{
		id: 'e1',
		title: "hello world"
	}, {
		id: 'e2',
		title: "hello deepjs"
	}], {
		properties: {
			title: {
				type: "string",
				description:"the title of my mp3",
				minLength: 4,
				required: true
			}
		}
	});

	var view = deep.View({
		what: "json::/json/test.json",
		how: "swig::/templates/simple.html",
		where: "dom.appendTo::#content"
	});

	view.refresh();
	console.log("app started");

});