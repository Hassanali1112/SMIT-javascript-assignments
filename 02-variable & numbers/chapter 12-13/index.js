// task 02
// let firstInt = parseInt(prompt("Enter first integer"));
// let secondInt = parseInt(prompt("Enter second integer"));

// if(firstInt < secondInt){
//   alert( +firstInt+" is less than " + secondInt);
// } else if(firstInt > secondInt){
//   alert(firstInt + " is greater than " + secondInt);
// }else{
//   alert(firstInt + " is equal to " + secondInt);
// }

// task 03

// let numberToCheck = parseInt(prompt("write a number to check positivity, negitivity or zero"));
// if(numberToCheck > 0){
//   alert(numberToCheck + " is a positive number");
// } else if(numberToCheck < 0){
//   alert(numberToCheck + " is a negative number ")
// } else{
//   alert(numberToCheck + " is zero ");
// }

// task 04
// let chacToCheck = prompt("Enter a lower case vowel or consonant character ");
// console.log(typeof chacToCheck)
// console.log( chacToCheck)
// if(chacToCheck == "a" || chacToCheck == "e" || chacToCheck == "i" || chacToCheck == "o" || chacToCheck == "u" ){
//   alert(chacToCheck + " is a vowel");
// } else{
//   alert(chacToCheck + " is a consonant")
// }

// task 05

// let password = "password";
// let userInput = prompt("Enter a password");
// if(userInput === password){
//   alert("You are welcome your entered password is correct!");
// } else {
//   alert("your entered password is incorrect please try again");
// }

// task 06
// let greetings;
// let hours = parseInt(prompt("enter a number for hours between 0 and 23"));
// if(hours < 18){
//   greetings = "good day";
//   alert(greetings)
// } else{
//   greetings = "good evening";
//   alert(greetings);
// }

// task 07
let time = parseInt(prompt("enter a number for hours between 0000 and 2400"));
if(time < 1200){
  alert("Good Morning!");
} else if(time >= 1200 && time < 1700){
  alert("Good Afternoon!");
}else if(time >=1700 && time < 2100 ){
  alert("Good Evening!");
} else{
  alert("Good Night!");
}