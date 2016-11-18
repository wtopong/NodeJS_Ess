// var events = require('events');
// // EventEmitter is constructor
// var emitter = new events.EventEmitter();
// // add listener
// emitter.on('customerEvent', function(message, status) {
// 	console.log(`${status}: ${message}`);
// });
// // launch event
// emitter.emit('customerEvent', "Hello World", 200);

// pull out EventEmitter constructor
var EventEmitter = require('events').EventEmitter;
var util = require('util');

// create person prototype
var Person = function(name) {
	this.name = name;
};

util.inherits(Person, EventEmitter);

var ben = new Person("Ben Franklin");

ben.on('speak', function(said) {
	console.log(`${this.name}: ${said}`);
});

ben.emit('speak', "You may delay, but time will not.");