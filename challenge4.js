var john = {firstName: 'John',
	mass: 45,
	height: 4,
	calcBMI: function(){
		this.BMI = this.mass/(this.height^2);
		return this.BMI
	}
}

var mark = {firstName: 'Mark',
	mass: 46,
	height: 4,
	calcBMI: function(){
		this.BMI = this.mass/(this.height^2);
		return this.BMI
	}
}

function getHighestBMI(john, mark) {
	if (john.calcBMI() > mark.calcBMI()) {
		return john.firstName + " has a higher BMI of " + john.BMI;
	} else if (john.BMI < mark.BMI) {
		return mark.firstName + " has a higher BMI of " + mark.BMI;
	} else {
		return "John and Mark both have a BMI of " + mark.BMI;
	}
}

console.log(getHighestBMI(john, mark))
