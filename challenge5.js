var john = {name: 'John',
	bills: [124, 48, 268, 180, 42],
	calcTips: function() {
		this.tips = [];
		this.totals = [];
		for (var i = 0; i < this.bills.length; i++) {
			if (this.bills[i] < 50) {
				this.tips.push(this.bills[i] * 0.2);
				this.totals.push(this.bills[i] + (this.bills[i] * 0.2));

			} else if (this.bills[i] >= 50 && this.bills[i] < 200) {
				this.tips.push(this.bills[i] * 0.15);
				this.totals.push(this.bills[i] + (this.bills[i] * 0.15));

			} else {
				this.tips.push(this.bills[i] * 0.1);
				this.totals.push(this.bills[i] + (this.bills[i] * 0.1));
			}
		}
	}
};

var mark = {name: 'Mark',
	bills: [77, 375, 110, 45],
	calcTips: function() {
		this.tips = [];
		this.totals = [];
		for (var i = 0; i < this.bills.length; i++) {
			if (this.bills[i] < 100) {
				this.tips.push(this.bills[i] * 0.2);
				this.totals.push(this.bills[i] + (this.bills[i] * 0.2));

			} else if (this.bills[i] >= 100 && this.bills[i] < 300) {
				this.tips.push(this.bills[i] * 0.1);
				this.totals.push(this.bills[i] + (this.bills[i] * 0.1));

			} else {
				this.tips.push(this.bills[i] * 0.25);
				this.totals.push(this.bills[i] + (this.bills[i] * 0.25));
			}
		}
	}
};

function getAverage(tips) {
	tipSum = 0
	for (var i = 0; i < tips.length; i++) {
		tipSum += tips[i]
	}
	return tipSum/tips.length
};

john.calcTips();
mark.calcTips();
console.log(john.tips);
console.log(john.totals);
console.log(mark.tips);
console.log(mark.totals);

var johnAvg = getAverage(john.tips);
var markAvg = getAverage(mark.tips);

if (johnAvg == markAvg) {
	console.log("They both tipped the same.");
} else if (johnAvg > markAvg) {
	console.log("John's family tipped more.");
} else {
	console.log("Mark's family tipped more.");
}
