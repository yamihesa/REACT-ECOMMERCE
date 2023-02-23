import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJc4I360TdO3pR2CDsXlVq9K2R3-wX-So",
  authDomain: "yami-79189.firebaseapp.com",
  projectId: "yami-79189",
  storageBucket: "yami-79189.appspot.com",
  messagingSenderId: "118858335188",
  appId: "1:118858335188:web:b817474091dad6104fcc41"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
