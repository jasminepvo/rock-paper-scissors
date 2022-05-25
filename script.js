// Starting with 3 steps to problem solving. 
// 1. Understand the problem: Rock paper scissors is a hand game where players forms one of the three shapes with an outstretched hand. Rock is a closed fist. Paper is a flat hand. Scissors is a peace or victory sign with the index and middle finger extended. The solutions include.. Rock beats scissors. Scissors beats paper. Paper beats rock. Three possible outcomes would be a win, loss or draw if both players shoose the same shape.

// 2. Plan: The game is going to play against the computer so no user interface is needed. Inputs would be entered into the console from the player of hand choice: 1. rock 2. paper 3. scissors. The desired output will include the computer's hand choice and result of the game aka whether the player has won, loss or it is a draw. Given the inputs, what are the steps necessary to return the desired output? Pseudocode = 
// Prompt player with game information
// Prompt player with question "What is your hand choice?" and store into playerSelection
// Make function computerPlay which will have computer randomly returns rock, paper, scissor
// Store computerPlay into ComputerSelection
// If player inputs rock: computer inputs scissors, player wins | computer inputs paper, computer wins | else draw
// If player inputs scissors: computer inputs paper, player wins | computer inputs rock, computer wins | else draw
// If player inputs paper: computer inputs rock, player wins | computer inputs scissors, computer wins | else draw
// Return string of outcome

// 3. Divide and conquer
// Prompt player with game information
alert("Lets play a game of Rock, Paper, Scissors");

// Prompt player with question of hand choice and store into playerSelection
let playerSelection = prompt("Choose rock, paper or scissors");

// Make function computerPlay which will have computer randomly returns array of strings [rock, paper, scissor] then use math.floor of array length and math.random
// Store randomized answer into computerSelection
function computerPlay() {
    const arr = ["Rock", "Paper", "Scissors"];
    const computerSelection = arr[Math.floor(Math.random() * arr.length)];
    return computerSelection;
}
// Test function to see if computer is returning expected output
console.log(computerPlay());

// If player and computer input same choice == try again/draw
// If player inputs rock: computer inputs scissors, player wins | computer inputs paper, computer wins | else draw
// If player inputs scissors: computer inputs paper, player wins | computer inputs rock, computer wins | else draw
// If player inputs paper: computer inputs rock, player wins | computer inputs scissors, computer wins | else draw
// Return string of outcome
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        alert("Computer has also chose" + computerSelection + ". It is a tie! Play again.");
    } 
    else if (playerSelection = "rock") {
        if (computerSelection = "scissors") {
            alert("Player won");
        }
        else {
            alert("Computer won");
        }
    }
    else if (playerSelection = "scissors") {
        if (computerSelection = "paper") {
            alert("Player won");
        }
        else {
            alert("Computer won");
        }
    }
    else if (playerSelection = "paper") {
        if (computerSelection = "rock") {
            alert("Player won");
        }
        else {
            alert("Computer won");
        }
    }
}
playRound();