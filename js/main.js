//Functions

//Methods = Built - in Functions !

"Jeremy".toLowerCase();
Math.random();

//Function Declaration Syntax:
//Accept an email stop at @

const toProperCase = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

console.log(toProperCase("jeremy"));
