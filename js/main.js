console.log("console script");
console.log(typeof "jeremy");
console.log(typeof 42);
console.log(typeof true);

//strings
const myVariable = "mathematics";
//The length property
console.log(myVariable.length);
console.log(myVariable.charAt(6));
console.log(myVariable.indexOf("kale"));

// Your First Interactive Game
let playGame = confirm("Shall we play rock, paper, or scissors?");
if (playGame) {
  //play
  let playerChoice = prompt("Please enter rock, paper, or scissors.");
  if (playerChoice) {
    let playerOne = playerChoice.trim().toLowerCase();
    if (
      playerOne === "rock" ||
      playerOne === "paper" ||
      playerOne === "scissors"
    ) {
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer =
        computerChoice === 1
          ? "rock"
          : computerChoice === 2
          ? "paper"
          : "scissors";