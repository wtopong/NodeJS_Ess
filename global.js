// load 'path' module into file
var path = require("path");

var hello = "Hello World from Node.js";

var justNode = hello.slice(17);

console.log(`Rock on World from ${justNode}`);

console.log(__dirname);

console.log(__filename);

console.log(`Using "path" module to pluck filename :${path.basename(__filename)}`);