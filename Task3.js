// Task 3:
// Create a program that takes in a string and returns an object that contains the count of each letter in the string.
//  The program should also output the most common letter and the least common letter.
// Input: “Twitter Blue has it all, be it editing tweets, posting longer videos, or flaunting your verification badge! But it still fails to solve the one trivial issue, which is advertisements.”
var string = "Twitter Blue has it all, be it editing tweets, posting longer videos, or flaunting your verification badge! But it still fails to solve the one trivial issue, which is advertisements.";
  
var removedSpecialCharstring = string.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "").toLowerCase(); // removing special characters, whitespace & converting to lowercase
// console.log("removedSpecialCharstring",removedSpecialCharstring);

const stringCounts = {};

for(let char of removedSpecialCharstring){
  // console.log(char);
  stringCounts[char] = stringCounts[char] ? stringCounts[char] + 1 : 1;
}
console.log("count of each letter",stringCounts)
  
let counts = Object.values(stringCounts);
// console.log(counts);
let maxCount = Math.max(...counts);
// console.log(maxCount);
let minCount = Math.min(...counts);
// console.log(minCount);

let mostCommon = Object.keys(stringCounts).find(key => stringCounts[key] === maxCount);
let leastCommon = Object.keys(stringCounts).find(key => stringCounts[key] === minCount);

console.log("Most common", mostCommon);
console.log("Least common", leastCommon);




