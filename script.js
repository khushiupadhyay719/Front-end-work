//var create for user score track
let userScore = 0;
//var create for computer score track
let compScore = 0;

//access choice from 3 choice  like which choice i clicked
const choices = document.querySelectorAll(".choice");

//show msg on html page so access it 
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

comp-score

const genCompChoice = () => {
    const options = ["rock" , "paper" , "scissors"];
    //rock , paper, scissors (randomaly generate one choice  by comp )
    const randomIndex = Math.floor(Math.random()*3); //remove after decimal values and generate 3 values 
    // computer choice return in options using radnindex
    return options[randomIndex];
}

//draw game fun
const drawGame = () => {
    console.log("Draw the game");
    msg.innerText = "Game was Draw. Play Again!";
    msg.style.backgroundColor="blue";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore++;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"
    }
    else{
        compScore++;
        compScorePara.innerText= compScore++;
        msg.innerText = `You Lose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
   
}

//comp generate random choice
const playGame = (userChoice) => {
    //generate random choice by comp & compare and update scre
    console.log("User choice",userChoice);

    //generate comp choice
    const compChoice = genCompChoice();
    console.log("Computer choice",compChoice);

//----------------------------------------------------------------------------------------------
    //conditions -- 1)draw game
    if(userChoice === compChoice){
        drawGame();
    }else{
        // user can win or not to tack by UserWin var
        let userWin = true;

        if(userChoice === "rock"){
            // comp - scissors, paper
           userWin =  compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper"){
            // comp - rock, paper
            userWin = compChoice === "scissors" ? false : true; 
        }
        else{
            //comp - paper, scissors
            userWin = compChoice ==="rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);

    }


};




//every div/image add event listner to track click event
choices.forEach((choice) => {
    //print all individual choices div
    // console.log(choice);
    choice.addEventListener("click", () => {

        const userChoice = choice.getAttribute("id");
        //access every id like which click on image get paper,rock
            // console.log("choice was clicked",userChoice);
            playGame(userChoice);
    });
});
