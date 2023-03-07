// Task 4 :
// Create a program that takes in a string and returns an object that contains the count of each character in the string.
// Input: “Twitter Blue has it all, be it editing tweets, posting longer videos, or flaunting your verification badge! But it still fails to solve the one trivial issue, which is advertisements.”

let letterstring = "Twitter Blue has it all, be it editing tweets, posting longer videos, or flaunting your verification badge! But it still fails to solve the one trivial issue, which is advertisements."

let cleanedString = letterstring.replace(/[^\w\s]|_/g, "");
console.log(cleanedString)

let stringObj = {};

for(let char of cleanedString){
  // console.log("char",char);
  stringObj[char] = stringObj[char] ? stringObj[char] + 1 : 1;
}
console.log(stringObj);