import firebase from "firebase";

const firebaseConfig = {
  apiKey: "***REMOVED***",
  authDomain: "challenge-f0ac9.firebaseapp.com",
  databaseURL: "https://challenge-f0ac9.firebaseio.com",
  projectId: "challenge-f0ac9",
  storageBucket: "challenge-f0ac9.appspot.com",
  messagingSenderId: "809428555305",
  appId: "1:809428555305:web:17448a722cfc23f0c4ee38",
  measurementId: "G-M7B2NNNLY1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
