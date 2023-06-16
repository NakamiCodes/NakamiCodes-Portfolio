// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFGfjbGCPyAbr_hntyMEATpSjznCyaMa4",
  authDomain: "nakami-portfolio.firebaseapp.com",
  projectId: "nakami-portfolio",
  storageBucket: "nakami-portfolio.appspot.com",
  messagingSenderId: "57646751722",
  appId: "1:57646751722:web:105d407bd227e8976edc93",
  measurementId: "G-RKS74Q0SPG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
