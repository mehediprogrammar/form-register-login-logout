// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBox7MgHb5YzHIDuDnlseAudl76ATCjusY",
  authDomain: "form-register-login-logout.firebaseapp.com",
  projectId: "form-register-login-logout",
  storageBucket: "form-register-login-logout.appspot.com",
  messagingSenderId: "856234137929",
  appId: "1:856234137929:web:c34079b8c6dcf31438a298"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app);

export default auth;