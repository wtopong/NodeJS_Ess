// use expect child and chai as assertion engine
var expect = require("chai").expect;
// use rewire to require SUT (Software Under Test)
var rewire = require("rewire");
var order = rewire("../lib/order");
// use sinon module for log function
var sinon = require("sinon");
// use describe function for mocha module
describe("Ordering Items", function() {
	// create fake data for each hook up
	beforeEach(function() {
		this.testData  = [
		// SKU Stock Keeping Unit
			{sku: "AAA", qty: 10},
			{sku: "BBB", qty: 0},
			{sku: "CCC", qty: 3}
		];
		// mockup console
		this.console = {
			log: sinon.spy()
		};
		// mockup warehouse
		this.warehouse = {
			packageAndShip: sinon.stub().yields(10987654321)
		};
		order.__set__("inventoryData", this.testData);
		// use rewire to inject the console
		order.__set__("console", this.console);
		// inject mock warehouse
		order.__set__("warehouse", this.warehouse);
	});

	// it an asynchronous method
	it("order an item when there are enough in stock", function(done) {
		// to protect the scope of this
		var _this = this;
		// inject done function if it never to the line 40 this test will fail
		order.orderItem("CCC", 3, function() {
			expect(_this.console.log.callCount).to.equal(2);
			done();
		});
	});

	describe("warehouse interaction", function() {

		beforeEach(function() {
			this.callback = sinon.spy();
			// cannot wait the call-back function to be called so injecting with spy
			order.orderItem("CCC", 2, this.callback);
		});

		it("receives a tracking number", function() {
			expect(this.callback.calledWith(10987654321)).to.equal(true);
		});

		it("calls packageAndShip with the correct sku and quantity", function() {
			expect(this.warehouse.packageAndShip.calledWith("CCC", 2)).to.equal(true);
		});

	});

});

