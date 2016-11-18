var fs = require("fs");

// move directory logs to working directory
// fs.renameSync("./assets/logs", "./logs");
// console.log("Directory moved");

// remove directories
fs.rmdir("./assets", function(err) {
	if(err) {
		throw err;
	}
	console.log("Assets directory removed");
});


fs.readdirSync("./logs").forEach(function(fileName) {
	fs.unlinkSync("./logs/" + fileName);
});
// remove directory only that dir is empty
fs.rmdir("./logs", function(err) {
	if(err) {
		throw err;
	}
	console.log("Logs directory removed");
});