import firebase from "firebase/app";
import 'firebase/database';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAJPQ8Ln4Fc8gSYfrTPAHMtcooowhuru4w",
    authDomain: "well-done-kids.firebaseapp.com",
    databaseURL: "https://well-done-kids-default-rtdb.firebaseio.com",
    projectId: "well-done-kids",
    storageBucket: "well-done-kids.appspot.com",
    messagingSenderId: "160406843547",
    appId: "1:160406843547:web:d1b1470f7d1d647b5b963e",
    measurementId: "G-8ZV79JFYJY"
};
const app = firebase.initializeApp(firebaseConfig);
export const db = app.database();
export const auth = app.auth();

