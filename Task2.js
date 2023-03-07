//  Create a program that takes in an array of objects,
//  where each object represents a product with properties for name, price, and quantity.
//  The program should return an object that contains the total revenue for each product

const products = [{
  "id": 1,
  "name": "Carbonated Water - Strawberry",
  "price": 204,
  "quantity": 42
}, {
  "id": 2,
  "name": "Sage Ground Wiberg",
  "price": 144,
  "quantity": 30
}, {
  "id": 3,
  "name": "Bread - Hot Dog Buns",
  "price": 445,
  "quantity": 17
}, {
  "id": 4,
  "name": "Oil - Shortening - All - Purpose",
  "price": 255,
  "quantity": 42
}, {
  "id": 5,
  "name": "Wasabi Paste",
  "price": 481,
  "quantity": 39
}]
  
  const revenueByProduct = products.reduce((result, product) => {
    const { name, price, quantity } = product;
    const revenue = price * quantity;
    result[name] = revenue;
    return result;
  }, {}); // 
  
  console.log(revenueByProduct);



// Task 3:
// Create a program that takes in a string and returns an object that contains the count of each letter in the string.
//  The program should also output the most common letter and the least common letter.
// Input: “Twitter Blue has it all, be it editing tweets, posting longer videos, or flaunting your verification badge! But it still fails to solve the one trivial issue, which is advertisements.”
var name = "Twitter Blue has it all, be it editing tweets, posting longer videos, or flaunting your verification badge! But it still fails to solve the one trivial issue, which is advertisements.";
  
var removedSpecialCharName = name.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "").toLowerCase(); // removing special characters & converting to lowercase
console.log("removedSpecialCharName",removedSpecialCharName);

const letterCounts = {};

for(let char of removedSpecialCharName){
  // console.log(char);
  letterCounts[char] = letterCounts[char] ? letterCounts[char] + 1 : 1;
}
console.log("count of each letter",letterCounts)
  
let counts = Object.values(letterCounts);
// console.log(counts);
let maxCount = Math.max(...counts);
console.log(maxCount);
let minCount = Math.min(...counts);
console.log(minCount);

let mostCommon = Object.keys(letterCounts).find(key => letterCounts[key] === maxCount);
let leastCommon = Object.keys(letterCounts).filter(key => letterCounts[key] === minCount);

// Example usage

console.log("Most common", mostCommon);
console.log("Least common", leastCommon);




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