// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4_nMMmyqfZe8X_Xlri3raFX6u39Vog90",
  authDomain: "movfix-99724.firebaseapp.com",
  projectId: "movfix-99724",
  storageBucket: "movfix-99724.firebasestorage.app",
  messagingSenderId: "466826463009",
  appId: "1:466826463009:web:68461615b290a0b9562060",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
