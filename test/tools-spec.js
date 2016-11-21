var expect = require("chai").expect;
var tools = require("../lib/tools");
// to create mockup wikipedia server 
var nock = require("nock");

describe("Tools", function() {

	describe("printName()", function() {
		it("should print the last name first", function() {
			var results = tools.printName({first: "Alex", last: "Banks"});
			expect(results).to.equal("Banks, Alex");
		});
	});

	describe("loadWiki()", function() {
		// by default is 2000
		// this.timeout(5000);

		before(function() {
			// create fake server so it replies with status 200
			nock("https://en.wikipedia.org")
				.get("/wiki/Abraham_Lincoln")
				.reply(200, "Mock Abraham Linkcoln Page");
		});

		it("Load Abraham Lincoln's wikipedia page", function(done) {
			tools.loadWiki({first: "Abraham", last: "Lincoln"}, function(html) {
				expect(html).to.equal("Mock Abraham Linkcoln Page");
				done();
			});
		});
	});

});

