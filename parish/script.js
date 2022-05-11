let curScore = 0;

// Keep score
function saveScore() {
    sessionStorage.setItem("score", curScore);
}



function yourFunction(initValue) {
    console.log(initValue);
    let player = initValue;

    // Images
    // const rockImg = document.createElement("img");
    // const paperImg = document.createElement("img");
    // const scissorsImg = document.createElement("img");
    
    const rockImg = ("../assets/rock.png");
    const paperImg = ("../assets/paper.png");
    const scissorsImg = ("../assets/scissors.png");

    const yours = document.getElementById('yoursImg');
    const houses = document.getElementById('housesImg');

    // Set the house's choice
    const houseArray = [
        "rock",
        "paper",
        "scissors"
    ];

    let theHouse = houseArray[Math.floor(Math.random() * houseArray.length)];
    
    // Append each choice to its element
    document.getElementById('playerChoice').innerHTML = `You chose ${player}`;
    document.getElementById('houseChoice').innerHTML = `The house chose ${theHouse}`;
    
    let display = document.getElementById('results');
    let score = document.getElementById('yourScore');
    
    switch(true) {
        case player == 'rock' && theHouse == 'scissors': display.innerHTML = ('You Win!');
            curScore++; console.log(curScore); score.innerHTML = (curScore);
            yours.src = "../assets/rock.png"; houses.src = "../assets/scissors.png";
        break;
        case player == 'rock' && theHouse == 'paper': display.innerHTML = ('You Lose.');
            curScore--; console.log(curScore); score.innerHTML = (curScore);
            yours.src = "../assets/rock.png"; houses.src = "../assets/paper.png";
        break;
        case player == 'paper' && theHouse == 'rock': display.innerHTML = ('You Win!');
            curScore++; console.log(curScore); score.innerHTML = (curScore);
            yours.src = "../assets/paper.png"; houses.src = "../assets/rock.png";
        break;
        case player == 'paper' && theHouse == 'scissors': display.innerHTML = ('You Lose.');
            curScore--; console.log(curScore); score.innerHTML = (curScore);
            yours.src = "../assets/paper.png"; houses.src = "../assets/scissors.png";
        break;
        case player == 'scissors' && theHouse == 'paper': display.innerHTML = ('You Win!');
            curScore++; console.log(curScore); score.innerHTML = (curScore);
            yours.src = "../assets/scissors.png"; houses.src = "../assets/paper.png";
        break;
        case player == 'scissors' && theHouse == 'rock': display.innerHTML = ('You Lose.');
            curScore--; console.log(curScore); score.innerHTML = (curScore);
            yours.src = "../assets/scissors.png"; houses.src = "../assets/rock.png";
        break;
        default: display.innerHTML = ('Tie - Try Again');
            yours.src = "../assets/rock-light.png"; houses.src = "../assets/rock-light.png";
    
    }

    saveScore()
    let field = document.getElementById("yourScore");
}