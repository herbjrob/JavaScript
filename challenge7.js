(function() {

	var score = 0;
	var contin = true;

	function Question(question, choices, correct) {
		this.question = question;
		this.choices = choices;
		this.correct = correct;
	}

	Question.prototype.display = function() {
			
			console.log(this.question);

			for (var i = 0; i < this.choices.length; i++) {
				console.log(i + ': ' + this.choices[i]);
			}
			var answer = prompt('What is the answer?');
			var res = check(answer, this.correct);
		
			while (res) {
				answer = prompt('What is the answer?');
				res = check(answer, this.correct);
			}
	};

	var q1 = new Question('What is 1?', [1,2], '0');
	var q2 = new Question('What is 2?', [1,2,3,4,5,6], '1');
	var q3 = new Question('What is 3?', [1,2,3], '2');
	var q4 = new Question('What is 4?', [1,2,3,4], '3');

	var questions = [q1, q2, q3, q4];

	function ask(questions) {
		var current = Math.floor(Math.random() * questions.length);
		questions[current].display();
	}

	function check(answer, correct) {
		if (answer === 'exit') { 
			contin = false;
			return false
		} else if (answer === correct) {
			console.log('Correct!!!');
			score++;
			console.log('Your score is: ' + score);
			console.log('-------------------------------------------');
			return false;
		} else {
			console.log('Wrong  :( ');
			return true;
		}
	}

	while (contin) {
		ask(questions);
	}
})();
