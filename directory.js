var fs = require("fs");

if(fs.existsSync("libs")) {
	console.log("Directory already there");
} else {
	fs.mkdir("libs", function(err) {
		if(err) {
			console.log(err);
		} else {
			console.log("Directory Created");
		}
	});
}