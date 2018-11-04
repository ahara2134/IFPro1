(function() {
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyC0nc7A0ZAlUXvSuT_DP2PyFfNv-db8QMc",
            authDomain: "sfp2-bc1b5.firebaseapp.com",
            databaseURL: "https://sfp2-bc1b5.firebaseio.com",
            projectId: "sfp2-bc1b5",
            storageBucket: "sfp2-bc1b5.appspot.com",
            messagingSenderId: "257222939567"
          };
          firebase.initializeApp(config);
    
          //Get elements
          const txtEmail = document.getElementById('txtEmail');
          const txtPassword = document.getElementById("txtPassword");
          const btnLogin = document.getElementById('btnLogin');
          const btnSignup = document.getElementById('btnSignup');
          const btnLogout = document.getElementById('btnLogout');
    
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
              } else {
                  console.log('not logged in');
                  btnLogout.classList.add('hide');
              }
          });
    });

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
