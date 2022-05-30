// Starting with 3 steps to problem solving. 
// 1. Understand the problem: Rock paper scissors is a hand game where players form one of the three shapes with an outstretched hand. Rock is a closed fist. Paper is a flat hand. Scissors is a peace or victory sign with the index and middle finger extended. The solutions include.. Rock beats scissors. Scissors beats paper. Paper beats rock. Three possible outcomes would be a win, loss or draw if both players choose the same shape.
// 2. Plan: The game is going to play against the computer so no user interface is needed. Inputs would be entered into the console from the player of hand choice: 1. rock 2. paper 3. scissors. The desired output will include the computer's hand choice and result of the game aka whether the player has won, loss or it is a draw. Given the inputs, what are the steps necessary to return the desired output? Pseudocode = 
// Prompt player with question "What is your hand choice?" and store into playerSelection
// computerSelection will randomize array of string
// Store computerPlay into computerSelection
// If player inputs rock: computer inputs scissors, player wins | computer inputs paper, computer wins | else draw
// If player inputs scissors: computer inputs paper, player wins | computer inputs rock, computer wins | else draw
// If player inputs paper: computer inputs rock, player wins | computer inputs scissors, computer wins | else draw
// Return string of outcome
// 3. Divide and conquer

// Array of choices
const choices = ["rock", "paper", "scissors"];
let winners = [];

function game() {
  for (let i = 1; i <= 5; i++) {
    playRound(i);
  }
  logWins();
} game();

function playRound(round) {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
  logRound(playerSelection, computerSelection, winner, round);
}

function playerChoice() {
  let input = prompt("Type Rock, Paper, or Scissors");
  while (input == null) {
    input = prompt("Type Rock, Paper, or Scissors");
  }
  input = input.toLowerCase();
  let check = validateInput(input);
  while (check == false) {
    input = prompt(
      "Type Rock, Paper, or Scissors. Spelling needs to be exact, but capitilization doesnt matter"
    );
    while (input == null) {
      input = prompt("Type Rock, Paper, or Scissors");
    }
    input = input.toLowerCase();
    check = validateInput(input);
  }
  return input;
}

function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function validateInput(choice) {
  return choices.includes(choice);
}

function checkWinner(choiceP, choiceC) {
  if (choiceP === choiceC) {
    return "Tie";
  } else if (
    (choiceP === "rock" && choiceC == "scissors") ||
    (choiceP === "paper" && choiceC == "rock") ||
    (choiceP === "scissors" && choiceC == "paper")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function logWins() {
  let playerWins = winners.filter((item) => item == "Player").length;
  let computerWins = winners.filter((item) => item == "Computer").length;
  let ties = winners.filter((item) => item == "Tie").length;
  console.log("Results:");
  console.log("Player Wins:", playerWins);
  console.log("Computer Wins:", computerWins);
  console.log("Ties:", ties);
}

function logRound(playerChoice, computerChoice, winner, round) {
  console.log("Round:", round);
  console.log("Player Chose:", playerChoice);
  console.log("Computer Chose:", computerChoice);
  console.log(winner, "Won the Round");
  console.log("-------------------------------");
}
