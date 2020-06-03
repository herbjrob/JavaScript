// Setting up the super class
class LandObj {
	// Setting up Super class with name and year
	constructor (name, year) {
		this.name = name;
		this.year = year;
	}

	// Setting up Super class to calculate age
	calculateAge() {
		return new Date().getFullYear() - this.year;
	}

}

// Setting up the Park sub class 
class Park extends LandObj {
	// Setting up constructor to include trees and area
	constructor (name, year, trees, area) {
		super(name, year);
		this.trees = trees;
		this.area = area;
		
	}

	// Setting up parks to calculate their age
	calcTreeDensity() {
		return this.trees/this.area;
	}

	toString() {
		return `${this.name} has a tree density of ${this.calcTreeDensity()} trees per square km.`;
	}

}

// Setting up the Street sub class 
class Street extends LandObj {
	// Setting up street constuctor to include length and class which defaults to normal
	constructor (name, year, length, clas = 'normal') {
		super(name, year);
		this.length = length
		this.clas = clas
	}

	toString() {
		return `${this.name}, built in ${this.year}, is a ${this.clas} street.`
	}
};

// Creating parks
let p1 = new Park('Green Park', 1987, 215, 0.2);
let p2 = new Park('National Park', 1894, 3541, 2.9);
let p3 = new Park('Oak Park', 1953, 949, 0.4);

// Creating a List of all parks
let parksList = [p1,p2,p3];

// Creating streets
let s1 = new Street('Ocean Avenue', 1999, 1.1, 'big');
let s2 = new Street('Evergreen Street', 2008, 2.7, 'small');
let s3 = new Street('4th Street', 2015, 0.8);
let s4 = new Street('Sunset Boulvard', 1982, 2.5, 'huge');

// Creating a List of all parks
let streetsList = [s1,s2,s3,s4];

// Creating a function to get the ages
var getAverageAge = function(parks) {
	var sum, avg;
	
	sum = 0;

	parks.forEach(el => sum += el.calculateAge());
	avg = sum/parks.length;
	
	return avg

};

function getStreetLens(streets) {
	const lens = streets.map(el => el.length);
	const sum = lens.reduce((prev, cur, index) => prev + cur, 0);

	return [sum, sum / lens.length];
	
}

var getParksReport = function(parks) {
	console.log('----------Parks Report----------');
	parks.forEach(el => console.log(el.toString()));
	console.log(`Our ${parks.length} parks have an average of ${getAverageAge(parks)} years.`)
	parks.forEach(el => el.trees > 999 ? console.log(`${el.name} has more than 1000 trees.`) : console.log());
}

var getStreetsReport = function(streets) {
	console.log('----------Streets Report----------');
	const [sum, avg] = getStreetLens(streets);
	console.log(`Our ${streets.length} streets have a total length of ${sum} km, with an average of ${avg} km.`);
	streets.forEach(el => console.log(el.toString()));
}

// 1) Total length
// 2) average Length

getParksReport(parksList);
getStreetsReport(streetsList);