var sayings = [
"You may delay, but time will not.",
"Tell me and I forget. Teach me and I remember. Involve me and I learn.",
"Earlyto bed and early to rise makes a man healthy, wealthy and wise",
"By failing to prepare, you are preparing to fail.",
"Well done is better than well said.",
"An investment in knowledge pays the best interest."];

var interval = setInterval(function() {
	var i = Math.floor(Math.random()  * sayings.length);
	process.stdout.write(`${sayings[i]} \n`);
}, 1000);

process.stdin.on(`data`, function(data) {
	console.log(`STDIN Data Recieved -> ${data.toString().trim()}`);
	clearInterval(interval);
	process.exit();
});