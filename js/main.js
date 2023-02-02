//Conditionals: If Statements

//syntax

// if (condition) {
//run some code
// } else {
//run some different code
// }

let soup = "chicken noodle soup";
let reply;
let customerIsBanned = true;
let crackers = true;

if (customerIsBanned) {
  reply = "no soup for you";
} else if (soup && crackers) {
  reply = `Here's your order of ${soup} & crackers`;
} else {
  reply = `sorry, we're out of ${soup}`;
}
console.log(reply);
