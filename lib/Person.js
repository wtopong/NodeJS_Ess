var EventEmitter = require('events').EventEmitter;
var util = require('util');

// create person prototype
var Person = function(name) {
	this.name = name;
};

util.inherits(Person, EventEmitter);

module.exports = Person;