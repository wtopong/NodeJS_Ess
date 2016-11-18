var https = require("https");
var fs = require("fs");
// # details about request
var options = {
	hostname: "en.wikipedia.org",
	port: 443,
	path: "/wiki/George_Washington",
	method: "GET"
};

var req = https.request(options, function(res) {
	var responseBody ="";
	console.log("Response from serer started.");
	// # template string
	console.log(`Server Status: ${res.statusCode}`);
	console.log("Response Headers %j === END", res.headers);
	res.setEncoding("UTF-8");
	// # first time the res event this callback will fired
	res.once("data", function(chunk) {
		console.log(chunk);
	});

	res.on("data", function(chunk) {
		console.log(`--chunk-- ${chunk.length}`);
		responseBody += chunk;
	});
	// # once this response end will invoke callback fnc
	res.on("end", function(){
		fs.writeFile("george-washington.html", responseBody, function(err) {
			if(err) {
				throw err;
			} 			
			console.log("File downloaded -----Write to a file successfully----");
		});
	});

});
// if request run into error
req.on("err", function(err) {
	console.log(`problem with request: ${err}`);
});
// end the session no more request
req.end();