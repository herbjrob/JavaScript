var johnGame1 = 150;
var johnGame2 = 120;
var johnGame3 = 103;

var mikeGame1 = 150;
var mikeGame2 = 120;
var mikeGame3 = 103;

var maryGame1 = 150;
var maryGame2 = 120;
var maryGame3 = 103;

var johnAVG = (johnGame1 + johnGame2 + johnGame3)/3;
var mikeAVG = (mikeGame1 + mikeGame2 + mikeGame3)/3;
var maryAVG = (maryGame1 + maryGame2 + maryGame3)/3;

/*
if (johnAVG === mikeAVG) {
	console.log("The averages are equal.");
	} else if (johnAVG > mikeAVG){
	console.log("John's team has the best average at " + johnAVG + " points per game.");
	} else {
	console.log("Mike's team has the best average at " + mikeAVG + " points per game.");
	}
*/

switch (true){
	case (johnAVG === mikeAVG && maryAVG === mikeAVG):
		console.log("The averages are equal at " + johnAVG + " points per game.");
		break;
	case (johnAVG > mikeAVG && johnAVG > maryAVG):
		console.log("John's team has the best average at " + johnAVG + " points per game.");
		break;
	case (mikeAVG > johnAVG && mikeAVG > maryAVG):
		console.log("Mike's team has the best average at " + mikeAVG + " points per game.");
		break;
	case (maryAVG > mikeAVG && maryAVG > johnAVG):
		console.log("Mary's team has the best average at " + maryAVG + " points per game.");
		break;
	case (johnAVG === mikeAVG && johnAVG > maryAVG):
		console.log("John's and Mike's teams tie for best average at " + johnAVG + " points per game.");
		break;
	case (mikeAVG === maryAVG && mikeAVG > johnAVG):
		console.log("Mike's and Mary's teams tie for best average at " + mikeAVG + " points per game.");
		break;
	case (maryAVG === johnAVG && maryAVG > mikeAVG):
		console.log("Mary's and John's teams tie for best average at " + maryAVG + " points per game.");
		break;
}