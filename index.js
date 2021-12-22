var win = 0;
var loss = 0;
var tie = 0;
var choices = ["R", "P", "S"];

var userChoice = "";
var computerChoice = "";

//Collect user choice
function generateUserChoice() {
    //TODO: ask user if they want R, P, S
    userChoice = prompt(`Rock, Paper, or Scissors?
Choose R, P, or S.`).toUpperCase()
    //TODO: store that choice somewhere
    //TODO: Edge case: user doesnt pick R,P,or S
    if (userChoice === "R" || userChoice === "S" || userChoice === "P") {
        generateCompChoice();
    } else {
        alert("That's not an option. Try again!")
        generateUserChoice();
    };
};


//Collect computer choice
function generateCompChoice() {
    //TODO: Randomly select R,P,S
    //TODO: store in variable
    var randomIndex = Math.floor(Math.random() * choices.length);
    computerChoice = choices[randomIndex];
    alert("The computer chooses " + computerChoice)
    compareChoices();
};

// compare choices
function compareChoices() {
    //TODO: win: user R comp S, user P comp R, user S, comp P
    //TODO: update win, loss, or tie variable with result
    if ((userChoice === "R" && computerChoice === "S") || (userChoice === "P" && computerChoice === "R") || (userChoice === "S" && computerChoice === "P")) {
        win++;
        alert('You win! =)')

    }
    else if (
        //TODO: loss: user R comp P, user P comp S, user S, comp R
        //TODO: update win, loss, or tie variable with result
        (userChoice === "R" && computerChoice === "P") || (userChoice === "P" && computerChoice === "S") || (userChoice === "S" && computerChoice === "R")) {
        loss++;
        alert('You lost =(')
    }
    else {
        //TODO: tie: anything else
        //TODO: update win, loss, or tie variable with result
        tie++;
        alert('You tied =|')
    };
    displayStats();
};

//TODO: Display outcome to player
//display stats
//TODO: tracking variables for win, loss and tie
//TODO: Show to user, use multiline alert
function displayStats() {
    alert(`Your record:
win=${win}
loss=${loss}
tie=${tie}`)
    var playAgain = confirm('Would you like to play again?');
    if (playAgain === true) {
        generateUserChoice();
    } else {
        return;
    };
};
//ask to play again
//TODO: after stats shown, ask user if they want to play again
//TODO: if they say yes, start over.  

generateUserChoice();