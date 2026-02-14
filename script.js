// -> Modular programing

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// Generate Computer Choice 
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  console.log("Game is Draw!....");
  msg.innerText = "Game is Draw!";
  msg.style.backgroundColor = "purple";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    console.log("You Win!....");
    msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    console.log("Computer Win!....");
    msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.log("UserChoice is = ", userChoice);
  // Generate Computer Choice 
  const compChoice = genCompChoice();
  console.log("Computer choice is = ", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // scissors , paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // rock, scissors
      userWin = compChoice === "rock" ? true : false;
    } else {
      // rock , paper
      userWin = compChoice === "paper" ? true : false;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

// User Choice 
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
