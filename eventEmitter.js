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
var Person = require("./lib/Person");

var ben = new Person("Ben Franklin");
var george = new Person("George Washington");

ben.on('speak', function(said) {
	console.log(`${this.name}: ${said}`);
});

george.on('speak', function(said) {
	console.log(`${this.name}: ${said}`);
});

ben.emit('speak', "You may delay, but time will not.");
george.emit('speak', "King speach.");