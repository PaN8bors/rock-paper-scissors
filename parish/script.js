

function yourFunction(initValue) {
    console.log(initValue);
    let player = initValue;

    const houseArray = [
        "rock",
        "paper",
        "scissors"
    ];

    let theHouse = houseArray[Math.floor(Math.random() * houseArray.length)];
    
    document.getElementById('playerChoice').innerHTML = `"You chose" ${player}`;
    document.getElementById('houseChoice').innerHTML = `"The house chose" ${theHouse}`;
    let display = document.getElementById('results');
    
    switch(true) {
        case player == 'rock' && theHouse == 'scissors': display.innerHTML = ('You Win!');
        break;
        case player == 'rock' && theHouse == 'paper': display.innerHTML = ('You Lose.');
        break;
        case player == 'paper' && theHouse == 'rock': display.innerHTML = ('You Win!');
        break;
        case player == 'paper' && theHouse == 'scissors': display.innerHTML = ('You Lose.');
        break;
        case player == 'scissors' && theHouse == 'paper': display.innerHTML = ('You Win!');
        break;
        case player == 'scissors' && theHouse == 'rock': display.innerHTML = ('You Lose.');
        break;
        default: display.innerHTML = ('Tie - Try Again');
    
    
    
    }







}