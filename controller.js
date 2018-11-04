// Disables button once the word bank is updated
function buttonClicked() {
        tempLetter = this.getAttribute("id");
        letter = tempLetter.toLowerCase();
        this.setAttribute("disabled", "disabled");

        checkLetter(letter);
};

function resetClicked() {
        updateChance();
};