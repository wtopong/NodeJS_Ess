var express = require("express");
var cors = require("cors"); // cross origin resource sharing
var bodyParser = require("body-parser"); // handle all post get delete method
var app = express();

var skierTerms = [
	{
		term: "Rip",
		defined: "To move at a high rate of speed"
	},
	{
		term: "Huck",
		defined: "To throw your body off of something, usually a natural feature like a cliff"
	},
	{
		term: "Chower",
		defined: "Powder after it has been suficiently skied"
	}
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
	console.log(`${req.method} request for "${req.url}" - ${JSON.stringify(req.body)}`);
	// will hand over ctrl to the express module
	next();
});

app.use(express.static("./www"));

app.use(cors());

app.get("/dictionary-api", function(req, res) {
	res.json(skierTerms);
});

app.post("/dictionary-api", function(req, res) {
	skierTerms.push(req.body);
	res.json(skierTerms);
});

app.delete("/dictionary-api/:term", function(req, res) {
	skierTerms = skierTerms.filter(function(definition) {
		return definition.term.toLowerCase() !== req.params.term.toLowerCase();
	});
	res.json(skierTerms);
});

app.listen(3000);

console.log("Express app running on port 3000");
module.exports = app;