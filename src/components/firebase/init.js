import firebase from 'firebase/app'
import firestore from 'firebase/firestore'
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA0hjo9Tu1mDh2qiQXC-zISiz4eIRj60ls",
    authDomain: "falco-d291f.firebaseapp.com",
    databaseURL: "https://falco-d291f.firebaseio.com",
    projectId: "falco-d291f",
    storageBucket: "falco-d291f.appspot.com",
    messagingSenderId: "135329418265",
    appId: "1:135329418265:web:51f5ed7b9008fa5495ee88",
    measurementId: "G-LVZ73C7H1W"
  };
  // Initialize Firebase
    const firebaseApp = firebase.initializeApp(firebaseConfig);
      firebase.analytics();
  export default firebaseApp.firestore();
