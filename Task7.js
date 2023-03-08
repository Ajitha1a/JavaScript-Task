// Task 7:
// Write a script that prompts the user for their name and age, and then outputs a message that greets them by name and tells them their age in dog years (1 human year is 7 dog years).

var namePrompt = prompt("Enter your name");
var agePrompt = prompt("Enter your age");

// console.log(namePrompt,agePrompt)

var dogyears = agePrompt * 7;
// console.log(dogyears);

function greetUser(a,b) {
    console.log("Hello " + a + "! " + "your age in dog years is: " + b);
}

greetUser(namePrompt,dogyears);
