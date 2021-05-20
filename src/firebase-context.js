import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCV4vrc7-72t3NtnUvu5bAA8Ky9oy7wRvU",
  authDomain: "scripbox-hack-idea.firebaseapp.com",
  projectId: "scripbox-hack-idea",
  storageBucket: "scripbox-hack-idea.appspot.com",
  messagingSenderId: "923768238438",
  appId: "1:923768238438:web:bf09408cb3f9a5e53798a7"
};

const firebaseContext = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig).firestore()
  : firebase.app().firestore();

export default firebaseContext;