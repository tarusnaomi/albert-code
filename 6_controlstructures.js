// control flow --- determining which code/block of code will be executed or even how many times the same is executed

// sequence -- executing code fro top downwards, no skipping or repeating(default behavior)

// conditional statements -- choose -- if else, switch case
let mark = 76;
if (mark > 80) {
  console.log("Grade: A");
} else if (mark > 70) {
  console.log("Grade: B");
} else if (mark > 55) {
  console.log("Grade: C");
} else if (mark > 45) {
  console.log("Grade: D");
} else {
  console.log("Grade: E");
}
// 2. rewrite this code using switch statement

// iteration.loops -- repeating execution of a block of code -- while loop, do while, for loop
let year = 1990;
while (year < 2024) {
  console.log(" We are in " + year);
  console.log("jan feb---dec");
  year = year - 1;
}
console.log("dojhjdf");
// rewrite this this loop using a for loop

// Find Minimum and Maximum: Write a program that iterates through an array of integers and keeps track of the minimum and maximum values encountered. Print the minimum and maximum elements at the end. e.g. [3,34,2,33,40,89,140,22,23] should give  min=2, max=140

//Sum of Even Numbers: Create a program that processes an array of numbers. Traverse the array and accumulate the sum of all even numbers within it. Print the final sum.

//Leap Year Check: Create a function that accepts a year as input and employs an if statement to check if it's a leap year. A leap year is any year that is evenly divisible by 4 (except for years that are evenly divisible by 100 but not by 400).
