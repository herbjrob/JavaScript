/************************************
* Coding Challenge 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index),
which is calculated using the formula:
BMI = mass/height^2 = mass/(height*height).
(mass in kg and height in meter).

1. Store Mark's and John'm mass and height in variables.
2. Calculate both their BMIs.
3. Create a boolean variable containing information about
whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from
step 3. (something like "Is Mark's BMI higher than John's? true"

*/

var massMark = prompt("What is Mark's body mass?");
var massJohn = prompt("What is John's body mass?");
var heightMark = prompt("What is Mark's height?");
var heightJohn = prompt("What is John's height");

var markBMI = massMark/(heightMark^2);
var johnBMI = massJohn/(heightJohn^2);

console.log(markBMI);
console.log(johnBMI);

var markGreater = markBMI > johnBMI;

console.log("Is Mark's BMI higher than John's? " + markGreater);