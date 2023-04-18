"use strict";

var _app = require("firebase/app");

var _analytics = require("firebase/analytics");

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCFGfjbGCPyAbr_hntyMEATpSjznCyaMa4",
  authDomain: "nakami-portfolio.firebaseapp.com",
  projectId: "nakami-portfolio",
  storageBucket: "nakami-portfolio.appspot.com",
  messagingSenderId: "57646751722",
  appId: "1:57646751722:web:105d407bd227e8976edc93",
  measurementId: "G-RKS74Q0SPG"
}; // Initialize Firebase

var app = (0, _app.initializeApp)(firebaseConfig);
var analytics = (0, _analytics.getAnalytics)(app);