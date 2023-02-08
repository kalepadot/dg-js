// Arrays
const myArray = [];

//add elements to an array
myArray[0] = "jeremy";
myArray[1] = 1001;
myArray[2] = false;

myArray.splice(1, 1, 42);
//instead of delete which makes that position empty
console.log(myArray);
console.log(myArray[1]);
