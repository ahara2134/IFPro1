function load_auth() {  
          //Get elements
          const txtEmail = document.getElementById('txtEmail');
          const txtPassword = document.getElementById("txtPassword");
          const btnLogin = document.getElementById('btnLogin');
          const btnSignup = document.getElementById('btnSignup');
          const btnLogout = document.getElementById('btnLogout');
          const authmsg = document.getElementById('authmessage');
    
          //Add Login event
          btnLogin.addEventListener('click', e=> {
              //Get email and password
              const email = txtEmail.value;
              const pass = txtPassword.value;
              const auth = firebase.auth();
    
              //Sign in
              const promise = auth.signInWithEmailAndPassword(email, pass);
              promise.catch(e => console.log(e.message));
          })
    
          //Add Sign up event
          btnSignup.addEventListener('click', e=> {
                //Get email and password
                const email = txtEmail.value;
                const pass = txtPassword.value;
                const auth = firebase.auth();
      
                //Sign in
                const promise = auth.createUserWithEmailAndPassword(email, pass);
                promise.catch(e => console.log(e.message));
          })
    
          //Add log out event
          btnLogout.addEventListener('click', e=> {
              firebase.auth().signOut();
          });
    
    
          //Add a realtime listener
          firebase.auth().onAuthStateChanged(firebaseUser => {
              if(firebaseUser) {
                  console.log(firebaseUser);
                  btnLogout.classList.remove('hide');
                  btnLogin.classList.add('hide');
                  btnSignup.classList.add('hide');
                  authmsg.innerHTML = "You are logged in.";
                  startGame();
              } else {
                  console.log('not logged in');
                  btnLogout.classList.add('hide');
                  btnLogin.classList.remove('hide');
                  btnSignup.classList.remove('hide');
                  authmsg.innerHTML = "Please Log in to play."
              }
          });
    };

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

function clear_data() {
        if (firebase.auth().currentUser) {
                // [START signout]
                firebase.auth().signOut();
                // [END signout]
        }
}
