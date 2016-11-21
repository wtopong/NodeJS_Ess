// use expect child and chai as assertion engine
var expect = require("chai").expect;
// use rewire to require SUT (Software Under Test)
var rewire = require("rewire");
var order = rewire("../lib/order");
// use sinon module for log function
var sinon = require("sinon");
// use describe function for mocha module
describe("Ordering Items", function() {
	beforeEach(function() {
		this.testData  = [
		// SKU Stock Keeping Unit
			{sku: "AAA", qty: 10},
			{sku: "BBB", qty: 0},
			{sku: "CCC", qty: 3}
		];

		this.console = {
			log: sinon.spy()
		};

		order.__set__("inventoryData", this.testData);
		// use rewire to inject the console
		order.__set__("console", this.console);
	});

	// it an asynchronous method
	it("order an item when there are enough in stock", function(done) {
		// to protect the scope of this
		var _this = this;
		// inject done function if it never to the line 33
		// this test will fail
		order.orderItem("CCC", 3, function() {
			expect(_this.console.log.callCount).to.equal(2);
			done();
		});
	});
});