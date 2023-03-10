// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4IDNhSsHU0rQDgnE9rzMBcgvEe6jGVvU",
  authDomain: "sample-firebase-project-85398.firebaseapp.com",
  projectId: "sample-firebase-project-85398",
  storageBucket: "sample-firebase-project-85398.appspot.com",
  messagingSenderId: "88278766268",
  appId: "1:88278766268:web:b0ac88ac1ae2c8832ef6b9",
  measurementId: "G-VLGR8HE4H2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

