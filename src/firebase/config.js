// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA86FOq6R7Lsc5k8bTBAruPrUS7Fwp10L0",
  authDomain: "mateando-rosario.firebaseapp.com",
  projectId: "mateando-rosario",
  storageBucket: "mateando-rosario.appspot.com",
  messagingSenderId: "42492232060",
  appId: "1:42492232060:web:d5044bd7f39bb57f7f64f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);