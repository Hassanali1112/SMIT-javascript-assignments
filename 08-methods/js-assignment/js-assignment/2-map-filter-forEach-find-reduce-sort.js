
//                    Assignment
// We suppose marks array as  
let marks = [90, 80, 65, 40, 75, 30, 25, 15];

// 1- Print all the numbers greater then 40 in asc order using map
let marksMoreThan40 = marks.filter( mark => mark > 40)
// console.log(marksMoreThan40)

// 2- Find all the students having number equal to 70. 
let marksEqual70 = marks.filter(mark => mark === 70 )
console.log(marksEqual70)

// 3- Find all the numbers less then 40 using filter function.
let marksLess40 = marks.filter(mark => mark < 40)
console.log(marksLess40)
// 4- Using forEach function display only fail students.

