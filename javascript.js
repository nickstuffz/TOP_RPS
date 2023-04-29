let pScore = 0;
let compScore = 0;
let i = 0;
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let pChoice = button.innerHTML;
        let choice = pChoice.toLowerCase();
        let result = runRPS(choice);

        i += 1;
        if (result === "Winner winner chicken dinner!") {
            pScore += 1;
        }
        else if (result === "You lose loser!") {
            compScore += 1;
        }
        
        const container = document.querySelector('#container');
        const p1 = document.createElement('p');
        p1.textContent = ("You chose " + choice +
        ", the computer chose " + compSelect + ".");
        container.appendChild(p1);
        
        const p2 = document.createElement('p');
        p2.textContent = (result);
        container.appendChild(p2);

        const p3 = document.createElement('p');
        p3.textContent = ("After round " + i + " the total score: " +
        "YOU = " + pScore + ", ur puter = " + compScore + ".");
        container.appendChild(p3);

        if (i === 5) {
            if (pScore > compScore) {
                final = "You have won, you may now smash your puter!";
            }
            else if (compScore > pScore) {
                final = "Your puter now owns you, legally.";
            }
            else {
                final = "You tied, you may live in peace... for now."; 
            }
        const fscore = document.createElement('h3');
        fscore.textContent = (final);
        container.appendChild(fscore);              
        
        // kill the buttons
        const body = document.querySelector('body');
        body.removeChild(document.querySelector('#selector'));
        }
    });
});



function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random()*3)];
    // randomly returns "rock" "paper" or "scissors"
}

function runRPS(pSelect) {

    compSelect = getComputerChoice();

    if (pSelect === compSelect) {
        return "Stalemate Baby!";
    }
    else if (pSelect === "rock") {
        if (compSelect === "paper") {
            return "You lose loser!";
        }
        else {
            return "Winner winner chicken dinner!";
        }
    }
    else if (pSelect === "paper") {
        if (compSelect === "scissors") {
            return "You lose loser!";
        }
        else {
            return "Winner winner chicken dinner!";
        }
    }
    else if (pSelect === "scissors") {
        if (compSelect === "rock") {
            return "You lose loser!";
        }
        else {
            return "Winner winner chicken dinner!";
        }
    }
    else {
        return "Something went wrong sorry!";
    }
}


