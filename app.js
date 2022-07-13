let startButton = document.querySelector(".game-start");
let mainContainer = document.querySelector(".main-container");
let gameContainer = document.querySelector(".game-container");
let playerButtons = document.querySelectorAll(".player-button");
let playerButtonsContainer = document.querySelector(
  ".player-buttons-container"
);
let computerButtons = document.querySelectorAll(".computer-button");
let playerScoreSpan = document.querySelector(".player-score");
let computerScoreSpan = document.querySelector(".computer-score");
let roundWinner = document.querySelector(".round-winner");
let roundWinnerText = document.querySelector(".round-winner-text");
let playerWinsDisplay = document.querySelector(".player-wins-display");
let playerWinsText = document.querySelector("player-wins-text");
let computerWinsDisplay = document.querySelector(".computer-wins-display");
let computerWinsText = document.querySelector("computer-wins-text");

let playerSelection;
let playerScore = 0;
let computerScore = 0;
let rounds = 5;

//Function to Generate Computers Choice
function computerPlay() {
  let randomInt = Math.floor(Math.random() * 3) + 1;
  if (randomInt === 1) {
    return "rock";
  } else if (randomInt === 2) {
    return "paper";
  } else if (randomInt === 3) {
    return "scissor";
  } else {
    console.error("IDK");
  }
}

//Get Players Choice
function getPlayerChoice(e) {
  if (e.target.classList.contains("rock")) {
    playerSelection = "rock";
  }
  if (e.target.classList.contains("paper")) {
    playerSelection = "paper";
  }
  if (e.target.classList.contains("scissor")) {
    playerSelection = "scissor";
  }
}

//Function for playing a round & deciding who won the round
function playRound() {
  let playerChoice = playerSelection;
  let computerChoice = computerPlay();

  if (playerChoice === "rock") {
    if (computerChoice === "paper") {
      console.log("Computer Wins Paper beats Rock");
      return [2, computerChoice];
    } else if (computerChoice === "scissor") {
      console.log("You Win Rock beats Scissors");
      return [1, computerChoice];
    } else if (computerChoice === "rock") {
      console.log("You Tied Rock & Rock");
      return [3, computerChoice];
    }
  }
  if (playerChoice === "paper") {
    if (computerChoice === "scissor") {
      console.log("Computer Wins Scissors beats Paper");
      return [2, computerChoice];
    } else if (computerChoice === "rock") {
      console.log("You Win Paper beats Rock");
      return [1, computerChoice];
    } else if (computerChoice === "paper") {
      console.log("You Tied Paper & Paper");
      return [3, computerChoice];
    }
  }
  if (playerChoice === "scissor") {
    if (computerChoice === "rock") {
      console.log("Computer Wins Rock beats Scissors");
      return [2, computerChoice];
    } else if (computerChoice === "paper") {
      console.log("You Win Scissors beats Paper");
      return [1, computerChoice];
    } else if (computerChoice === "scissor") {
      console.log("You Tied Scissor & Scissor");
      return [3, computerChoice];
    }
  }
}

function displayGameWinner(winz) {
  winz.classList.remove("hidden");
  roundWinner.classList.add("hidden");
  playerButtonsContainer.classList.add("hidden");
}

//Update UI Based On Winner for Round and Game To 5
function updateUI(e) {
  let results = playRound();
  console.log(results);
  if (results[0] === 1) {
    playerButtons.forEach(function (e) {
      e.style.backgroundColor = "white";
    });
    e.target.style.backgroundColor = "green";
    playerScore++;
    playerScoreSpan.textContent = playerScore;
    roundWinnerText.textContent = `👤 You Win The Round ${playerSelection} beats ${results[1]}`;
    computerButtons.forEach(function (e) {
      e.style.backgroundColor = "white";
      if (e.classList.contains(results[1])) {
        e.style.backgroundColor = "red";
      }
    });
  }
  if (results[0] === 2) {
    playerButtons.forEach(function (e) {
      e.style.backgroundColor = "white";
    });
    e.target.style.backgroundColor = "red";
    computerScore++;
    computerScoreSpan.textContent = computerScore;
    roundWinnerText.textContent = `🤖 Computer Wins The Round ${results[1]} beats ${playerSelection}`;
    computerButtons.forEach(function (e) {
      e.style.backgroundColor = "white";
      if (e.classList.contains(results[1])) {
        e.style.backgroundColor = "green";
      }
    });
  }
  if (results[0] === 3) {
    playerButtons.forEach(function (e) {
      e.style.backgroundColor = "white";
    });
    e.target.style.backgroundColor = "yellow";
    roundWinnerText.textContent = `Draw ${playerSelection} and ${results[1]} Tie`;
    computerButtons.forEach(function (e) {
      e.style.backgroundColor = "white";
      if (e.classList.contains(results[1])) {
        e.style.backgroundColor = "yellow";
      }
    });
  }
  if (playerScore === 5) {
    displayGameWinner(playerWinsDisplay);
  } else if (computerScore === 5) {
    displayGameWinner(computerWinsDisplay);
  }
}

//Start Game Functionality
startButton.addEventListener("click", function () {
  mainContainer.classList.remove("contain");
  gameContainer.classList.remove("hidden");
  startButton.classList.add("hidden");
});

//Button Functionality
document.addEventListener("click", function (e) {
  console.log(e.target.classList);
  if (e.target.classList.contains("player-button")) {
    getPlayerChoice(e);
    updateUI(e);
  }
});
