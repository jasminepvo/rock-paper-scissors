// Rock Paper Scissors using UI

// Array of choices
let winners = [];
const choices = ["rock", "paper", "scissors"];

// Start Game
function startGame() {
  // Grab all images in html and store in imgs
  let imgs = document.querySelectorAll("img");
  // For each image -> call function to listen for click -> call function to check img id then play round according to that img id
  imgs.forEach((img) =>
    img.addEventListener("click", () => {
      if (img.id) {
        playRound(img.id);
      }
    })
  );
}

// Reset game after 5 rounds
function resetGame() {
  winners = [];
  document.querySelector(".playerScore").textContent = "Score: 0";
  document.querySelector(".computerScore").textContent = "Score: 0";
  document.querySelector(".ties").textContent = "Ties: 0";
  document.querySelector(".winner").textContent = "";
  document.querySelector(".playerChoice").textContent = "";
  document.querySelector(".computerChoice").textContent = "";
  document.querySelector(".reset").style.display = "none";
}

function playRound(playerChoice) {
  // Stop after 5 rounds
  let wins = checkWins();
  if (wins >= 5) {
    return;
}

  const computerChoice = computerSelection();

  const winner = checkWinner(playerChoice, computerChoice);
  winners.push(winner);
  updateScore();
  displayRound(playerChoice, computerChoice, winner);

  wins = checkWins();
  if(wins == 5) {
    //display end results
    //change the button to visible
    //change the text to display winner
    displayFinalResults();
  }
}

function checkWins() {
  const pWinCount = winners.filter((item) => item == "Player").length;
  const cWinCount = winners.filter((item) => item == "Computer").length;
  return Math.max(pWinCount, cWinCount); 
}

function updateScore() {
  const pWinCount = winners.filter((item) => item == "Player").length;
  const cWinCount = winners.filter((item) => item == "Computer").length;
  const ties = winners.filter((item) => item == "Tie").length;
  document.querySelector(".playerScore").textContent = `Score: ${pWinCount}`;
  document.querySelector(".computerScore").textContent = `Score: ${cWinCount}`;
  document.querySelector(".ties").textContent = `Ties: ${ties}`;
}

function displayRound(playerChoice, computerChoice, winner) {
  // charAt grabs first letter of choice and toUpperCase returns capitalized
  document.querySelector(".playerChoice").textContent = `You chose: ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}`;
  document.querySelector(".computerChoice").textContent = `Computer chose: ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`;
  displayRoundWinner(winner); 
}

function displayRoundWinner(winner) {
  if (winner == "Player") {
    document.querySelector(".winner").textContent = "You win!";
  } else if (winner == "Computer") {
    document.querySelector(".winner").textContent = "Computer wins!";
  } else {
    document.querySelector(".winner").textContent = "It's a tie, play again!";
  }
}

function displayFinalResults() {
  let playerWins = winners.filter((item) => item == "Player").length;
  let computerWins = winners.filter((item) => item == "Player").length;
 
  if (playerWins == 5){
    document.querySelector(".winner").textContent = "YOU WIN! You won 5 times, congrats!";
  } else {
    document.querySelector(".winner").textContent = "YOU LOSE! The computer won 5 times";
  }
  document.querySelector(".reset").style.display = "flex";
}

function computerSelection() {
  // Update the DOM with computer selection
  // Randomize choices and store in choice
  const choice = choices[Math.floor(Math.random() * choices.length)];
  console.log(choice);

  document.querySelector(`.${choice}`).classList.add("active");
  console.log(choice);

  setTimeout( () => {document.querySelector(`.${choice}`).classList.remove("active");}, 700);

  return choice;
}

function checkWinner(choice1, choice2) {
  if (
    (choice1 == "rock" && choice2 == "scissors") ||
    (choice1 == "scissors" && choice2 == "paper") ||
    (choice1 == "paper" && choice2 == "rock")
  ) {
    return "Player";
  } else if (choice1 == choice2) {
    return "Tie";
  } else {
    return "Computer";
  }
}

startGame();