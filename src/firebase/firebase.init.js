// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDBGnZmpz96uUMvfX8P4E2l9dDcegOw4ss",
    authDomain: "jacob-billy.firebaseapp.com",
    projectId: "jacob-billy",
    storageBucket: "jacob-billy.appspot.com",
    messagingSenderId: "309732024082",
    appId: "1:309732024082:web:40bea87e0bff4e5f7dddcb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;