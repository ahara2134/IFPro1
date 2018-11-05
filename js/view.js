var gameWord;
var currentScore        = 0;
const letterDiv         = document.getElementById("wordHolder");
const chanceHolder      = document.getElementById("chanceNum");
const defDiv            = document.getElementById("defHolder");
const scoreHolder       = document.getElementById("scoreNum");
const msgHolder         = document.getElementById("message");
const txtEmail          = document.getElementById('txtEmail');
const txtPassword       = document.getElementById("txtPassword");
const btnLogin          = document.getElementById('btnLogin');
const btnSignup         = document.getElementById('btnSignup');
const btnLogout         = document.getElementById('btnLogout');
const authmsg           = document.getElementById('authmessage');
const gameContent       = document.getElementById('gamecontent');

// Creates buttons A-Z 
function startGame() {
    var letter, button, p, container;
    for(var i = 65; i < 91; i++) {
        if(i == 65 || i == 75 || i == 91) {
            p = document.createElement("p");
        }
        var letter          = String.fromCharCode(i);
        button = document.createElement("button");
        button.innerHTML    = letter;
        button.setAttribute("data-letter", letter);
        button.setAttribute("id", letter);
        button.setAttribute("class", "btn btn-primary btn-lg");
        button.addEventListener("click", buttonClicked, false)
        p.appendChild(button);
        if(i == 74 || i == 74 || i == 90) {
            let container = document.getElementById("buttonHolder");
            container.appendChild(p);
        }

    }
    generateWord();
};

function createWordView(word, def) {
    //Show word definition
    defP = document.createElement("p");
    defP.innerHTML          = def;
    defDiv.appendChild(defP);
    
    //Show empty letter slots
    gameWord = word;
    pLetter = document.createElement("p");
    for(var i = 0; i < gameWord.length; i++) {
        span = document.createElement("span");
        wordLetter = word.charAt(i);
        span.innerHTML      = "&nbsp&nbsp&nbsp;_";
        span.setAttribute("class", wordLetter + '_' + wordLetter);
        pLetter.appendChild(span);
    }
    
    letterDiv.appendChild(pLetter);
};

// Reveal the matchig letters in the view
function revealLetters(ch) {
    spanMatched             = document.getElementsByClassName(ch + '_' + ch);
    for(var i = 0; i < spanMatched.length; i++) {  
        spanMatched[i].innerHTML    = ch;
    }
};

//Increase the score by num upon a correct guess
function increaseScore(num) {
    currentScore += num;
    scoreHolder.innerHTML = currentScore;
};

// Decrese the score by 1 upon an incorrect guess.
function decreaseScore() {
    --currentScore;
    scoreHolder.innerHTML   = currentScore;
};

//Decrease number of chances  by 1 for view.
function decreaseChance(num) {
    chanceHolder.innerHTML  = num;
};

//Update view's chance to be full
function resetChance() {
    chanceHolder.innerHTML  = 7;
    chances = 7;
};

//Outputs a congratulatory message upon a correct guess.
function expressCongrats() {
    msgHolder.innerHTML     = "Congrats!";
};

//Retracts a congratulatory message upon an incorrect guess.
function retractCongrats() {
    msgHolder.innerHTML     = " ";
};

// Replace div contents with "GAME OVER", prevent further advancement
function gameOver(score) {
    msgHolder.innerHTML     = "GAME OVER.";
    chanceHolder.innerHTML = 0;
    container = document.getElementById("buttonHolder");
    container.innerHTML     = " ";
    wordHolder.innerHTML    = " ";
    defHolder.innerHTML     = " ";
    if(currentScore > score) {
        offerLeadershipBoard();
    }

};

function offerLeadershipBoard() {
    textName = document.getElementById("txtUName");
    btnSave = document.getElementById("btnSave");
    textName.classList.remove('hide');
    btnSave.classList.remove('hide');
}