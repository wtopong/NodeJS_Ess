var fs = require("fs");

// read file synchronously
// var contents = fs.readFileSync("./lib/sayings.md", "UTF-8");
// console.log(contents);

// read file asynchronously
// fs.readFile("./lib/sayings.md", "UTF-8", function(err, contents) {
// 	if(err) {
// 		console.log(err);
// 	}
// 	console.log(contents);
// });

var path = require("path");

fs.readdir("./lib", function(err, files) {
	files.forEach(function(fileName) {
		var file = path.join(__dirname, "lib", fileName);
		var stats = fs.statSync(file);
		if(stats.isFile() && fileName !== ".DS_Store") {
			fs.readFile(file, "UTF-8", function(err, contents) {
				console.log("reading: " + file);
				console.log(contents);
			});
		}
	});
});