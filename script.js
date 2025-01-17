let curScore;
let scoreBoard = document.getElementById("yourScore");
let scoreValue = sessionStorage.getItem("score");

// Check for browser refresh
// scoreValue == null ? curScore = 0 : scoreBoard.innerHTML = curScore = scoreValue;
scoreBoard.innerHTML = curScore = scoreValue || 0;
console.log(curScore);

function resetGame() {
  curScore = 0;
  sessionStorage.setItem("score", 0);
  document.getElementById("results").innerHTML = "RESULTS";
  document.getElementById("yourScore").innerHTML = "SCORE";
  document.getElementById("playerChoice").innerHTML = "You -";
  document.getElementById("houseChoice").innerHTML = "House -";
  document.getElementById("yoursImg").src = "./assets/mickeyR.png";
  document.getElementById("housesImg").src = "./assets/mickeyL.png";
}

// Keep score
function saveScore() {
  sessionStorage.setItem("score", curScore);
}

function yourFunction(initValue) {
  let player = initValue;

  const rockImg = "./assets/rock.png";
  const paperImg = "./assets/paper.png";
  const scissorsImg = "./assets/scissors.png";

  const yours = document.getElementById("yoursImg");
  const houses = document.getElementById("housesImg");

  // Set the house's choice
  const houseArray = ["rock", "paper", "scissors"];

  let theHouse = houseArray[Math.floor(Math.random() * houseArray.length)];

  // Append each choice to its element
  document.getElementById("playerChoice").innerHTML = `You -  ${player}`;
  document.getElementById("houseChoice").innerHTML = `House - ${theHouse}`;

  let display = document.getElementById("results");

  switch (true) {
    case player == "rock" && theHouse == "scissors":
      display.innerHTML = "You Win!";
      curScore++;
      yours.src = "./assets/rock.png";
      houses.src = "./assets/scissors.png";
      break;
    case player == "rock" && theHouse == "paper":
      display.innerHTML = "You Lose.";
      curScore--;
      yours.src = "./assets/rock.png";
      houses.src = "./assets/paper.png";
      break;
    case player == "paper" && theHouse == "rock":
      display.innerHTML = "You Win!";
      curScore++;
      yours.src = "./assets/paper.png";
      houses.src = "./assets/rock.png";
      break;
    case player == "paper" && theHouse == "scissors":
      display.innerHTML = "You Lose.";
      curScore--;
      yours.src = "./assets/paper.png";
      houses.src = "./assets/scissors.png";
      break;
    case player == "scissors" && theHouse == "paper":
      display.innerHTML = "You Win!";
      curScore++;
      yours.src = "./assets/scissors.png";
      houses.src = "./assets/paper.png";
      break;
    case player == "scissors" && theHouse == "rock":
      display.innerHTML = "You Lose.";
      curScore--;
      yours.src = "./assets/scissors.png";
      houses.src = "./assets/rock.png";
      break;
    default:
      display.innerHTML = "Tie - Try Again";
      yours.src = "./assets/mickeyR.png";
      houses.src = "./assets/mickeyL.png";
      break;
  }

  saveScore();
  document.getElementById("yourScore").innerHTML =
    sessionStorage.getItem("score");
  // scoreBoard.innerHTML = scoreValue;
}
