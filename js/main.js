// Code Challenge

//Write code that will return a random letter form your name

console.log(typeof "jeremy");
//this is a string

console.log("jeremy".charAt(Math.floor(Math.random() * 6)));

//Apply to any name, needs var to hold string data

const anyName = "Cori";
console.log(anyName.charAt(Math.floor(Math.random() * anyName.length)));
