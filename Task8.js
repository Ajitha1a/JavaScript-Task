// Task 8:
// Create a program that takes in a string and returns a new string with all the vowels removed.

const vowelString = "Quantum computing is a type of computing that uses the principles of quantum mechanics, which is a branch of physics that deals with the behavior of particles on a very small scale. In a traditional computer, information is stored and processed using bits, which can be either a 1 or a 0. In a quantum computer, the information is stored and processed using quantum bits, or qubits, which can be in a state of 1, 0, or a combination of both at the same time. This allows quantum computers to perform certain calculations and solve problems much faster than traditional computers."

var vowelsRemovedString = vowelString.replace(/[aeiou]/g,"")
console.log(vowelsRemovedString)