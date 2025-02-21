const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

function getComputerChoice() {
  const i = Math.random() * 3;
  return i > 2 ? ROCK : i > 1 ? PAPER : SCISSORS;
}

function getHumanChoice() {
  let choice = prompt(
    `Your choice: ${ROCK}, ${PAPER}, ${SCISSORS}`,
  ).toLowerCase();

  while (!checkValidUserChoice(choice)) {
    choice = prompt(
      `Please try only these options: ${ROCK}, ${PAPER}, ${SCISSORS}`,
    ).toLowerCase();
  }

  return choice;
}

function checkValidUserChoice(choice) {
  return choice === ROCK || choice === PAPER || choice === SCISSORS;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  const round = 5;

  const playRound = function (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log(`The draw! both are ${humanChoice}`);
      return;
    }

    const calcScores = (upperHand) => {
      let computerWin = computerChoice == upperHand;
      if (computerWin) {
        computerScore++;
        console.log(`You loss! ${computerChoice} beats ${humanChoice}`);
      } else {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      }
    };

    switch (humanChoice) {
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
  };

  for (let i = 0; i < round; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  console.log(
    `Final score\n computer: ${computerScore}\t your score ${humanScore}`,
  );
}

playGame();
