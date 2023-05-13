// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { createUserWithEmailAndPassword, getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyCB_Z_HGeYyGW1Yg6JcMnv0C29AEFNY2b8",
  authDomain: "fir-jsi.firebaseapp.com",
  projectId: "fir-jsi",
  storageBucket: "fir-jsi.appspot.com",
  messagingSenderId: "304501134107",
  appId: "1:304501134107:web:4f508ae51dba5bdb3779be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// go to login page from sign up page
document.getElementById("go-to-sign-in").addEventListener("click", () => {
  window.location.href = 'signIn.html'
})
//----- New Registration code start	  
document.getElementById("register").addEventListener("click", function () {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  //For new registration
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      alert("Registration successfully!!");
      window.location.href = 'signIn.html'
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      alert(error);
    });
});
//----- End