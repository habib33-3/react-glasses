// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCM1RNhwBsS0Q37ImMhKyBG1Kyns7Vfivg",
  authDomain: "react-glasses-63557.firebaseapp.com",
  projectId: "react-glasses-63557",
  storageBucket: "react-glasses-63557.appspot.com",
  messagingSenderId: "97861354650",
  appId: "1:97861354650:web:b84c6f4cc4e2ed387f8b23",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
