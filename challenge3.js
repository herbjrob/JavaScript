function getTip(bill) {
	if (bill < 50) {
		return bill * 0.2;
	} else if (bill >=50 && bill < 200) {
		return bill * 0.15;
	} else {
		return bill * 0.1;
	}
}

var bills = [124, 48, 268];

var tips = [getTip(bills[0]), getTip(bills[1]), getTip(bills[2])];

var totals = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])];

console.log(tips);
console.log(totals);