// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcw2csFUFevQi62PcKSENs15-cm-eR7rs",
  authDomain: "the-dragon-news-366c4.firebaseapp.com",
  projectId: "the-dragon-news-366c4",
  storageBucket: "the-dragon-news-366c4.firebasestorage.app",
  messagingSenderId: "212022122803",
  appId: "1:212022122803:web:eb60444c58d948e1be8646"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;