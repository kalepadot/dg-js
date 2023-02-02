//Functions

//Methods = Built - in Functions !

"Jeremy".toLowerCase();
Math.random();

//Function Declaration Syntax:
//Accept an email stop at @
const getUserNameFromEmail = function (email) {
  return email.slice(0, email.indexOf("@"));
};

console.log(getUserNameFromEmail("playerOne@gmail.com"));
