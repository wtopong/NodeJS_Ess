// use expect child and chai as assertion engine
var expect = require("chai").expect;
// use rewire to require SUT (Software Under Test)
var rewire = require("rewire");
var order = rewire("../lib/order");
// use decribe function from mocha module
describe("Ordering Items", function() {
	beforeEach(function() {
		this.testData  = [
		// SKU Stock Keeping Unit
			{sku: "AAA", qty: 10},
			{sku: "BBB", qty: 0},
			{sku: "CCC", qty: 3}
		];

		order.__set__("inventoryData", this.testData);
	});

	// it an asynchronous method
	it("order an item when there are enough in stock", function(done) {
		// inject done function if it never to the line 26
		// this test will fail
		order.orderItem("CCC", 3, function() {
			done();
		});
	});
});