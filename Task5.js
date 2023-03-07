// Task 5:
// Write a script that prompts the user for a number, and then creates an array with that number of elements, 
// where each element is a random number between 1 and 100. The script should then output the array to the console.

const userNumber = prompt("Enter the number");
const arr = [];

for (let i = 0; i < userNumber; i++) {
  arr.push(Math.floor(Math.random() * 100));
}

console.log(arr);