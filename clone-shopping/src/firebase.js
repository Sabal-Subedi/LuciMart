import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbqYX1Cl2cm0aG9wlfdr_XxUJs-gF41ko",
  authDomain: "shopping-store-b1aa6.firebaseapp.com",
  projectId: "shopping-store-b1aa6",
  storageBucket: "shopping-store-b1aa6.appspot.com",
  messagingSenderId: "342889249771",
  appId: "1:342889249771:web:976057cac252e60f8f77ae",
  measurementId: "G-11X0SYXX52",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore();

const auth = firebase.auth();

export { db, auth };
