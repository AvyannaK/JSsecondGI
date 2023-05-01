// HARD: Given the information below for Tom and Jerry. 
// Tom - 	height:  9in   	mass: 8 g
// Jerry - 	height: 10in 	mass: 45 g
// Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
//     BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
// Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s. Create a Boolean variable containing information about whether Tom has a higher BMI than Jerry. Print a string to the console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).






// Data 1

//Tom's Mass and Height

let tMass= 8

let tHe= 9

let ttot=(tMass / tHe);

console.log(ttot);

// Tom 0.88888889


// Jerry's Mass and Height

let jMass = 45

let jHe = 10

let jtot=(jMass / jHe);

console.log(jtot);

// Jerry 4.5

//Boolean

let higherM = jtot;

let jHigherBMI = higherM <= ttot ;

console.log("Is Tom's BMI higher than Jerry's?" + " " + jHigherBMI);











