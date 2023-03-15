// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9Dp7FHWLF7MvfQe33eiVP-fvKnqT834o",
  authDomain: "mycookdb.firebaseapp.com",
  projectId: "mycookdb",
  storageBucket: "mycookdb.appspot.com",
  messagingSenderId: "502886534652",
  appId: "1:502886534652:web:778c4dbd85f954f2e6b679",
  measurementId: "G-PZY4GTE56Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getAnalytics(app);
export {db}