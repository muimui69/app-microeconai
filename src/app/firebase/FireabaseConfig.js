// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyArTyHgWGJY9Ca2BDims73roNlph2oSH0c",
  authDomain: "microeconai-app.firebaseapp.com",
  projectId: "microeconai-app",
  storageBucket: "microeconai-app.appspot.com",
  messagingSenderId: "713068590805",
  appId: "1:713068590805:web:020ef5d8ca77531a5b145c",
  measurementId: "G-MQTYJ4KMCR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);   //auth users --> google or email
export const db = getFirestore(app); // Nosql  --> data in collecions
