// task 01
// var x = parseInt(prompt("enter your first number",));
// var y = parseInt(prompt("enter your second number"));
// var z = x + y;
// document.write("sum of "+ x +" and "+ y + " is " +z)

// task 02
// part (1)
// var x = parseInt(prompt("enter your first number"));
// var y = parseInt(prompt("enter your second number"));
// var z = x - y;
// document.write("subtraction of " + x + " and " + y + " is " + z);

// part (2)
// var x = parseInt(prompt("enter your first number"));
// var y = parseInt(prompt("enter your second number"));
// var z = x * y;
// document.write("Multiplication of " + x + " and " + y + " is " + z);

// part (3)
// var x = parseInt(prompt("enter your first number"));
// var y = parseInt(prompt("enter your second number"));
// var z = x / y;
// document.write("division of " + x + " and " + y + " is " + z);

// part (4)
// var x = parseInt(prompt("enter your first number"));
// var y = parseInt(prompt("enter your second number"));
// var z = x % y ;
// document.write("Modulus of " + x + " and " + y + " is " + z);

// task 3
// var myVariable;
// document.write(myVariable+"\n");
// myVariable = 5;
// myVariable = myVariable+1;
// document.write(myVariable + "\n");
// myVariable = myVariable + 7;
// document.write(myVariable + "\n");
// myVariable = myVariable - 1;
// document.write(myVariable + "\n");
// myVariable = myVariable % 3;
// document.write(myVariable + "\n");

// task 04
// var ticketCost = 600;
// var fiveTicketCost = ticketCost * 5;
// document.write("one movie ticket cost is "+ ticketCost+"\nfive movie ticket cost is "+ fiveTicketCost );

// task 05
// var TableNumber = parseInt(prompt("Enter a number for table to be displayed"));
// var TableRows = parseInt(prompt("Enter the numbers of rows you want to be displayed"));
// var sum = 1;
// for (let i =1; i<= TableRows; i++){
//   sum = TableNumber * i;
//   document.write(TableNumber + " X " + i + " = " + sum+"<br>")
// }

// task 6
// part (1)
// var temperatureInCelcius = prompt("Enter temperature in celcius");
// var temperatureInFahrenheit = (temperatureInCelcius * 9 / 5) + 32;
// document.write("the converted temperature in Fahrenheit is " + temperatureInFahrenheit);

// part (2)
// var  temperatureInFahrenheit = prompt("Enter temperature in Fahrenheit");
// var temperatureInCelcius = (temperatureInFahrenheit - 32 )  * 5 / 9 ;
// document.write("the converted temperature in celcius is " + temperatureInCelcius);

// task 07
// var item1 = prompt("Enter price of item one in PKR");
// var quantityOFItem1 = prompt("Enter quantity of item one in numbers");
// var totalCostOfItem1 = item1 * quantityOFItem1;
// document.write("total cost of item one " + totalCostOfItem1 + "  in PKR." )

// var item2 = prompt("Enter price of item two in PKR");
// var quantityOFItem2 = prompt("Enter quantity of item two in numbers\n");
//  var totalCostOfItem2 = item2 * quantityOFItem2;
// document.write("\ntotal cost of item two is " + totalCostOfItem2 + " in PKR." )

// task 08
// var totalMarks = 900;
// var obtainedMarks =  850;
// document.write(totalMarks+ "<br>")
// document.write(obtainedMarks+ "<br>")
// document.write((obtainedMarks * 100) / totalMarks);

// task 9
// let oneDollarInPKR = 104.80;
// let oneSaudiRiyalInPKR = 28;

// var total =(oneDollarInPKR * 10 + oneSaudiRiyalInPKR * 25);
// document.write("sum 10 dollar and 25 saudi riyal in pkr is "+ total);

// task 10
// var newVariable;
// newVariable = 0;
// newVariable = ((newVariable + 5) *10)/2
// console.log(newVariable)

// task 11
// var currentYear = 2024;
// var birthYear = 2000;
// var age = currentYear - birthYear;

// document.write("current year is "+currentYear +" your birth year is "+ birthYear +" Your age is " + age );

// task 12
// let circleRadius = 20;
// let circumference = 2 *(3.142)*circleRadius
// let circleArea = (3.142)* circleRadius**2

// document.write("The circumference of the circle is " + circumference + " of radius "+ circleRadius);

// document.write("<br>The area of the circle is " + circleArea + " of radius "+ circleRadius);

// task 13
let snack = "Super";
let currentAge = 15;
let maxAge = 65;
let remainYear = maxAge - currentAge;
let amountOfSnacksPerYear = 3;
let totalSnacks = amountOfSnacksPerYear * remainYear ;
document.write(" Total pack untill age 65 are " + totalSnacks);
