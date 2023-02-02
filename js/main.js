// Conditionals: Ternary Operator

//syntax
//condition ? ifTrue : ifFalse ;

let soup = "chicken noodle soup";
let isCustomerBanned = false;
// let isCustomerBanned = true;
let soupAccess = isCustomerBanned
  ? "sorry no soup for you"
  : soup
  ? `yes we have ${soup} today`
  : "sorry no soup dawg";

console.log(soupAccess);
