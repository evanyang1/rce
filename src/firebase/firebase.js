import * as firebase from 'firebase';

// Config for our project: (Add Firebase to your web app)
var config = {
    apiKey: "AIzaSyDvOfHD9dtvx9a75avscDwMecSmC9_6_wE",
    authDomain: "core-f0955.firebaseapp.com",
    databaseURL: "https://core-f0955.firebaseio.com",
    projectId: "core-f0955",
    storageBucket: "core-f0955.appspot.com",
    messagingSenderId: "952273629386"
  };

// initializeApp
firebase.initializeApp(config);

// Google Auth from Firebase
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider as default };
