import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA63NS6TsQPsnKVyRhCnH-NHR5BkV5LArA",
  authDomain: "crwn-clothing-db-e095c.firebaseapp.com",
  databaseURL: "https://crwn-clothing-db-e095c.firebaseio.com",
  projectId: "crwn-clothing-db-e095c",
  storageBucket: "",
  messagingSenderId: "802481502105",
  appId: "1:802481502105:web:3f0b09800f8f7e1a834508",
  measurementId: "G-TRF4M5X7R4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

//This line tells google to allow which google account the user wants to use to sign up
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
