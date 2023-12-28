// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjnrITRcoC0xoPso0kx8aiq6zj7lw600g",
  authDomain: "netflix-gpt-1488b.firebaseapp.com",
  projectId: "netflix-gpt-1488b",
  storageBucket: "netflix-gpt-1488b.appspot.com",
  messagingSenderId: "899523579471",
  appId: "1:899523579471:web:c489dad35a3f297183e43a",
  measurementId: "G-TQ4PM5XK63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const firestore = getFirestore(app);
