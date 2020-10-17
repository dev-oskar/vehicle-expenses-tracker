import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    // apiKey: process.env.REACT_FIREBASE_API_KEY,
    apiKey: "AIzaSyAM1l8X4qNslPbjdqLi5kBIJ4kLdF0JSSc",
    authDomain: "vehicle-expenses-tracker.firebaseapp.com",
    databaseURL: "https://vehicle-expenses-tracker.firebaseio.com",
    projectId: "vehicle-expenses-tracker",
    storageBucket: "vehicle-expenses-tracker.appspot.com",
    messagingSenderId: "452600926547",
    appId: "1:452600926547:web:b2878c92bdf3c33df051a6",
});

export default app;
