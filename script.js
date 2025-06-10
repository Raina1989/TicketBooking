
var firebaseConfig = {
    apiKey: "AIzaSyCL7Ojsh9noMNtsROGgV7mj67lqgLuHZ_c",
    authDomain: "booktickets-7098e.firebaseapp.com",
    databaseURL: "https://booktickets-7098e-default-rtdb.firebaseio.com",
    projectId: "booktickets-7098e",
    storageBucket: "booktickets-7098e.firebasestorage.app",
    messagingSenderId: "285859841991",
    appId: "1:285859841991:web:cfc62fa7259996e83bfbe2"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

document.addEventListener("DOMContentLoaded", function() {
    const registerBtn = document.getElementById("register-btn");
    const loginBtn = document.getElementById("login-btn");
    
    if (registerBtn) {
        registerBtn.addEventListener("click", function() {
            const user_name= document.getElementById("user-name").value;
            const email = document.getElementById("user-email").value;
            const password = document.getElementById("user-password").value;
            localStorage.setItem("user_name",user_name);
            localStorage.setItem("email",email);

            auth.createUserWithEmailAndPassword(email, password)
                .then(userCredential => {
                    alert("Registration successful! Welcome " + userCredential.user.email);
                    window.location.href = "event_selection.html"; // Redirect to next page
                })
                .catch(error => {
                    alert(error.message);
                });
        });
    }
    
    if (loginBtn) {
        loginBtn.addEventListener("click", function() {
            const user_name= document.getElementById("user-name").value;
            const email = document.getElementById("user-email").value;
            const password = document.getElementById("user-password").value;
            localStorage.setItem("user_name",user_name);
            localStorage.setItem("email",email);
            auth.signInWithEmailAndPassword(email, password)
                .then(userCredential => {
                    alert("Login successful! Welcome back " + userCredential.user.email);
                    window.location.href = "event_selection.html"; // Redirect to next page
                })
                .catch(error => {
                    alert(error.message);
                });
        });
    }
});
