var fs = require("fs");

// read not so big file
// fs.readFile("./chat.log", "UTF-8". function(err, chatlog) {
// 	console.log(`File Read ${chatlog.length}`);
// });

var stream = fs.createReadStream("./chat.log", "UTF-8");

var data = "";

// create a callback function for the data event only once
stream.once("data", function() {
	console.log("\n\n\n");
	console.log("Started Reading File.");
	console.log("\n\n\n");
});
// add listener on data event then call function(chunk) 2^16(65536bits)
stream.on("data", function(chunk) {
	process.stdout.write(` chunk: ${chunk.length} |`);
	data += chunk;
});
// add listener called end event
stream.on("end", function() {
	console.log("\n\n\n");
	console.log(`Finished Reading File ${data.length}`);
	console.log("\n\n\n");
});
