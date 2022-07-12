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

function getPlayerChoice() {
  return prompt("Choose Rock, Paper or Scissor").toLocaleLowerCase();
}

const playerSelection = getPlayerChoice();
const computerSelection = computerPlay();

function playRound() {
  const playerChoice = getPlayerChoice();
  const computerChoice = computerPlay();

  if (playerChoice === "rock") {
    if (computerChoice === "paper") {
      console.log("Computer Wins Paper beats Rock");
      return 2;
    } else if (computerChoice === "scissor") {
      console.log("You Win Rock beats Scissors");
      return 1;
    }
  }
  if (playerChoice === "paper") {
    if (computerChoice === "scissor") {
      console.log("Computer Wins Scissors beats Paper");
      return 2;
    } else if (computerChoice === "rock") {
      console.log("You Win Paper beats Rock");
      return 1;
    }
  }
  if (playerChoice === "scissor") {
    if (computerChoice === "rock") {
      console.log("Computer Wins Rock beats Scissors");
      return 2;
    } else if (computerChoice === "paper") {
      console.log("You Win Scissors beats Paper");
      return 1;
    }
  }
}

function checkWinner(player, computer) {
  if (player > computer) {
    console.log(`Player Beats Computer ${player} to ${computer}`);
  } else if (computer > player) {
    console.log(`Computer Beats Player ${computer} to ${player}`);
  } else if (player === computer) {
    console.log(`Draw Player:${player} Computer:${computer}`);
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 6; i++) {
    let winner = setTimeout(playRound(), 3000);
    if (winner === 1) {
      playerScore++;
    } else if (winner === 2) {
      computerScore++;
    }
  }
  checkWinner(playerScore, computerScore);
}

game();
