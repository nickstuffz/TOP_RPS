


function getComputerChoice() {
    // randomly return "rock" "paper" or "scissors"
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random()*3)]
}

// function that plays 1 round of RPS
// 2 parameters, case insensitive

function runRPS(pSelect) {

    compSelect = getComputerChoice();
    console.log("The computer chose " + compSelect);

    if (!(pSelect === "rock" || pSelect === "paper" || pSelect === "scissors")) {
        return "Input error, not RPS material. You fool try again"
    }
    else if (pSelect === compSelect) {
        return "Stalemate Baby!"
    }
    else if (pSelect === "rock") {
        if (compSelect === "paper") {
            return "You lose loser!"
        }
        else {
            return "Winner winner chicken dinner!"
        }
    }
    else if (pSelect === "paper") {
        if (compSelect === "scissors") {
            return "You lose loser!"
        }
        else {
            return "Winner winner chicken dinner!"
        }
    }
    else if (pSelect === "scissors") {
        if (compSelect === "rock") {
            return "You lose loser!"
        }
        else {
            return "Winner winner chicken dinner!"
        }
    }
    else {
        return "Something went wrong sorry!"
    }
}

// let choice = prompt("Type your choice!").toLowerCase();
// console.log("You chose " + choice);
// console.log(runRPS(choice));

// console.log(runRPS("paper"))

function game() {
    alert("This is an RPS versus ur puter, BO5, to the death!")
    let pScore = 0;
    let compScore = 0;

    for (let i=1; i<6; i++) {
        let pChoice = prompt("Type your choice!");

        if (pChoice === null) {
            console.log("You scared? I don't blame you")
            return;
        }

        choice = pChoice.toLowerCase();
        console.log("You chose " + choice);
        result = runRPS(choice);
        console.log(result);

        if (result === "Input error, not RPS material. You fool try again") {
            i -= 1
            continue;
        }
        else if (result === "Winner winner chicken dinner!") {
            pScore += 1;
        }
        else if (result === "You lose loser!") {
            compScore += 1;
        }
        
        console.log("After round " + i + " total score:")
        console.log("You = " + pScore, "puter = " + compScore)
    }

    if (pScore > compScore) {
        return console.log("You have won, you may now smash your puter!")
    }
    else if (compScore > pScore) {
        return console.log("Your puter now owns you, legally.")
    }
    else {
        return console.log("You tied, you may live in peace... for now.")
    }
}

game()

