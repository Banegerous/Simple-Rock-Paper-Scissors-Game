const compChoice = document.getElementById("compChoice");
const playerChoice = document.getElementById("playerChoice");
const result = document.getElementById("result");
const scoreDisplay = document.getElementById("score");
const playerSelected = document.querySelectorAll("button");
// setting of varaibles to match html component IDs & buttons

let compPicks;
let score = 0;
scoreDisplay.innerText = score; 
// List of variables for scoring and judging the win conditions


// Nothing happens until a button is clicked
// forEach button, grab the ID and set it to the playerChoice innerText
// then call the computerDecides function
playerSelected.forEach( button => { 
    button.addEventListener('click', () => {
        playerChoice.innerText = button.id;        
        computerDecides();
    })
    
});

// Random number generated (0-2) assigned to: 0 = Rock, 1 = Paper, 2 = Scissors
// then call the checkScore function
computerDecides = () => {
    compPicks = Math.floor(Math.random() * playerSelected.length);
    switch(compPicks) {
        case 0:
            compChoice.innerText = "Rock";
            break;
        case 1:
            compChoice.innerText = "Paper";
            break;
        case 2:
            compChoice.innerText = "Scissors";
            break;
    }

    checkScore();
};

checkScore = () => {  
    
    if (playerChoice.innerText === compChoice.innerText) {
        result.innerText = `It's a tie!`;
    } else if (playerChoice.innerText === "Rock" && compChoice.innerText === "Scissors") {
        result.innerText = `You Win!`;
        score++;   
            
    } else if (playerChoice.innerText === "Paper" && compChoice.innerText === "Rock") {
        result.innerText = `You Win!`;
        score++;
        
    } else if (playerChoice.innerText === "Scissors" && compChoice.innerText === "Paper") {
        result.innerText = `You Win!`;
        score++;
        
    } else {
        result.innerText = 'You lose!';
    }

    scoreDisplay.innerText = score; // Update the score display
    
    if (score === 10) {
        result.innerText = "You won! Let's start at zero again.";
        score = 0;
    }
};


//console.log(typeof compPicks); //for debugging