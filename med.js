// MEDIUM: Create a program that accepts a number (1-12) as input and logs to the console that number and its corresponding month. For example: if the user enters the number 3, then it should return the month “March.” Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).
// const months = {
//     Jan: '01',
//     Feb: '02',
//     Mar: '03',
//     Apr: '04',
//     May: '05',
//     Jun: '06',
//     Jul: '07',
//     Aug: '08',
//     Sep: '09',
//     Oct: '10',
//     Nov: '11',
//     Dec: '12',
//   }
// this is the user input, it asks the user for a number 1-12 through the prompt method
let userInput = prompt("Enter a number 1-12 to select a month");

// this is an array that holds the months
var myMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// this is a function that takes x (userinput) and determines if it is a valid number (1-12)
// if it is valid the function document writes the corresponding month with the users input
// if it is not valid it document writes that the users input was invalid (not 1-12)
function numToMonth (x){
  if(x < 13 && x > 0){
    return document.write("The month is " + myMonths[x-1])
  } else {
    return document.write("Error Invalid Number")
  }
    
}

// this is where I run the function
numToMonth(userInput)