// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

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

// go to sign up form sign in page
document.getElementById('go-to-sign-up').addEventListener('click', () => {
  window.location.href = 'signUp.html' 
})

//----- Login code start	  
document.getElementById("login").addEventListener("click", function () {
  var email = document.getElementById("login_email").value;
  var password = document.getElementById("login_password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      alert(user.email + " Login successfully!!!");
      window.location.href = 'myWebsite.html'
      localStorage.setItem('isLogin', true)
      // localStorage.setItem('userLogged', JSON.stringify({
      //   ...user,
      //   privateKey: 'AbVUinMiT3J'
      // }))
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      alert(errorMessage);
    });
});
//----- End