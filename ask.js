var question = [
"What is your name?",
"What is your fav hobby?",
"What is your preferred programming language?"];

var answers = [];

function ask(i) {
	process.stdout.write(`\n\n\n ${question[i]}`);
	process.stdout.write(" > ");
}
// add listener on standin
process.stdin.on('data', function(dat) {
	answers.push(data.toString().trim());
	if(answer.length < question.length) {
		ask(answers.length);
	} else {
		process.exit();
	}
});
// add listener on exit process
process.on('exit', function() {
	process.stdout.write("\n\n\n");
	process.stdout.write(`Go ${answers[1]} ${answer[0]} you can writing ${answer[2]}` );
	process.stdout.write("\n\n\n");
});

ask(0);