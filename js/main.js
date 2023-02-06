//var, let, and const

//global scope

var x = 1;
let y = 2;
const z = 3;
console.log(x);
//local scope

{
  let y = 4;
}

//local scope
function myFunc() {
  const z = 5;
}
