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

function to_register() {
        window.location.href="Register.html";
}

function attempt_login() {
        e.preventDefault();
        let form_email = document.forms["login_form"]["name_login"].value;
        let form_pw = document.forms["login_form"]["pw_login"].value;
        if (form_pw === "") {
                window.alert("Please enter a password.");
        }
        else if(form_email === "") {
                window.alert("Invalid email");
        } 
        else if(!(form_email.includes("@"))) {
                window.alert("Please check your e-mail format.");
        } else {

        }
};

function attempt_reg() {
        let form_email = document.forms["reg_form"]["name_reg"].value;
        let form_pw = document.forms["reg_form"]["pw_reg"].value;
        if (form_pw === "") {
                window.alert("Please enter a password.");
        }
        else if(form_email === "") {
                window.alert("Invalid email");
        } 
        else if(!(form_email.includes("@"))) {
                window.alert("Please check your e-mail format.");
        } else {
                firebase.auth().createUserWithEmailAndPassword()
                firebase.auth().createUserWithEmailAndPassword(form_email, form_pw).catch(function(error) {
                        // Handle Errors here.
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        // ...
                      });
        }
};