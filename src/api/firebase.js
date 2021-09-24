// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwgryfraBl3_mmC2T1zBhRCiD4RRjDnpw",
  authDomain: "formablocs.firebaseapp.com",
  projectId: "formablocs",
  storageBucket: "formablocs.appspot.com",
  messagingSenderId: "519555606083",
  appId: "1:519555606083:web:f6700b0cb2b8e00af6d6f6",
  measurementId: "G-1CVYTHN6N8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
