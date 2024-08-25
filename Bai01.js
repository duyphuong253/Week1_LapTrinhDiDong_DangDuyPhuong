// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

// 1. Store Mark's and John's mass and height in variables
var massMark = 78, heightMark = 1.69;
var massJohn = 92, heightJohn = 1.95;
var mass, height;

// 2. Calculate both their BMIs using the formula (you can even implement both versions)
function bmi(mass, height){
    return mass / height ** 2;
}

console.log(bmi(massMark, heightMark))
console.log(bmi(massJohn, heightJohn))

// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.

var markHigherBMI;
if(bmi(massJohn, heightJohn) > bmi(massMark, heightMark))
    markHigherBMI == true;
else
    markHigherBMI == false;

// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
// 1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
if(markHigherBMI === true){
    console.log("John's BMI is higher than Mark's");
}
else
    console.log("Mark's BMI is higher than John's");
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
if(markHigherBMI === true){
    console.log("John's BMI (" + bmi(massJohn, heightJohn) +") is higher than Mark's " + bmi(massMark, heightMark))
}
else
    console.log("Mark's BMI (" + bmi(massMark, heightMark) +") is higher than John's " + bmi(massJohn, heightJohn))