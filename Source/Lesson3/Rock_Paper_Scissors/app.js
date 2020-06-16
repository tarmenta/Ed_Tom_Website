const game = () => {
    let playerScore = 0;
    let computerScore = 0;

    //Function that Fades in the game
    const startGame = () => {
        const playButton = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playButton.addEventListener("click",() => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };

//Player
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".playerHand");
        const computerHand = document.querySelector(".computerHand");

        //Computer
        const computerOptions = ["rock","paper","scissors"];

        options.forEach(options=>{
            options.addEventListener("click",function () {
                //Computer chooses
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                //compare hands
                compareHands(this.textContent,computerChoice);

                //select images
                playerHand.src = `./hands/${this.textContent}.png`;
                computerHand.src = `./hands/${computerChoice}.png`;
            });
        });
    };

    //compare hands for each rock paper scissors
const compareHands = (playerChoice,computerChoice) => {
    const winner = document.querySelector(".winner");

    if(playerChoice === computerChoice){
        winner.textContent = "It is a tie";
        return;

    }
    //check for rock
    if(playerChoice === "rock"){
        if(computerChoice === "scissors"){
            winner.textContent = "Player Wins"
            return;
        }else{
            winner.textContent = "Computer Wins";
            return;
        }
    }
    //check for paper
    if(playerChoice === "paper"){
        if(computerChoice === "scissors"){
            winner.textContent = "Computer Wins"
            return;
        }else{
            winner.textContent = "Player Wins";
            return;
        }
    }
    //Check for Scissors
    if(playerChoice === "scissors"){
        if(computerChoice === "rock"){
            winner.textContent = "Computer Wins"
            return;
        }else{
            winner.textContent = "Player Wins";
            return;
        }
    }
}

//call function
    startGame();
    playMatch();

};


//Start Game
game();