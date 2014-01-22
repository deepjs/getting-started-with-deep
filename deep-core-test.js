
var deep = require("deepjs");
require("deep-mongo");
require("deepjs/deep-unit");

deep.debug = true;

for(var i  =0; i < parseInt(process.argv[2], 10); ++i)
	deep.Unit.run(deep.coreUnits, { verbose:false });