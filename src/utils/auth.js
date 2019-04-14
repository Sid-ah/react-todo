import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyACxN2aZSqSBQ6Cwuh3A0nRaixdbQfRtgc",
  authDomain: "react-demo-6875e.firebaseapp.com",
  databaseURL: "https://react-demo-6875e.firebaseio.com",
  projectId: "react-demo-6875e",
  storageBucket: "react-demo-6875e.appspot.com",
  messagingSenderId: "1094367971883"
};
firebase.initializeApp(config);

export const auth = true;
export const ref = firebase.database ().ref ();
export const dbF = firebase.firestore ();
export const firebaseAuth = firebase.auth;