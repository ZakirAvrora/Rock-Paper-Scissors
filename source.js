const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

let playerScore = 0;
let computerScore = 0;
let gameFinished = false;

const imgs = document.querySelectorAll("img");
const playerScoreDiv = document.querySelector(".playerScore");
const computerScoreDiv = document.querySelector(".computerScore");
const finalResultNode = document.querySelector(".final-result");
const newGameBtn = document.querySelector("#new-game");

imgs.forEach((e) => {
  e.addEventListener("click", (event) => {
    if (gameFinished) {
      return;
    }

    const playerChoice = event.target.id.toLowerCase().trim();
    const computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
  });
});

newGameBtn.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  finalResultNode.textContent = "";
  computerScoreDiv.textContent = "";
  playerScoreDiv.textContent = "";
  gameFinished = false;
});

function getComputerChoice() {
  const i = Math.random() * 3;
  return i > 2 ? ROCK : i > 1 ? PAPER : SCISSORS;
}

const playRound = function (playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    finalResultNode.textContent = "Draw";
    return;
  }

  let finalResult = "";

  const calcScores = (upperHand) => {
    let computerWin = computerChoice == upperHand;
    if (computerWin) {
      computerScore++;
      finalResult = `You loss! ${computerChoice} beats ${playerChoice}`;
    } else {
      playerScore++;
      finalResult = `You win! ${playerChoice} beats ${computerChoice}`;
    }
  };

  switch (playerChoice) {
    case ROCK:
      calcScores(PAPER);
      break;
    case PAPER:
      calcScores(SCISSORS);
      break;
    case SCISSORS:
      calcScores(ROCK);
      break;
  }

  computerScoreDiv.textContent = computerScore;
  playerScoreDiv.textContent = playerScore;

  if (computerScore === 5 || playerScore === 5) {
    finalResult = "Game finished! Please start a new game to continue";
    gameFinished = true;
  }

  finalResultNode.textContent = finalResult;
};
