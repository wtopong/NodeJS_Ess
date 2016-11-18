var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
var fs = require("fs");
var realPerson = {
	name: '',
	sayings: []
};

// listener which runs forever without process.exit
rl.question("What is the name of a real person? ", function(answer) {
	//console.log(answer);
	realPerson.name = answer;
	// only one person open file (mark down extension) so synchronous is fine
	fs.writeFileSync(realPerson.name + ".md", `${realPerson.name}\n====================\n\n`);
	rl.setPrompt(`What would ${realPerson.name} say? `);
	rl.prompt();
	// this listener will go on and on with question what else would you say?
	rl.on('line', function(saying) {

		fs.appendFile(realPerson.name + ".md", `* ${saying.trim()} \n`);

		if(saying.toLowerCase().trim() === 'exit') {
			rl.close();
		} else {
			realPerson.sayings.push(saying.trim());
			//console.log(saying.trim());
			rl.setPrompt(`What else would ${realPerson.name} say? ('exit' to leave) `);
			rl.prompt();
		}

	});

});

rl.on('close', function() {
	// %j represent json
	console.log("%s is a real person says %j", realPerson.name, realPerson.sayings);
	process.exit();
});