// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDlub00cWHt0GO9zXMPYcc-gYY7g2Hmsfc",
    authDomain: "finalproject-43926.firebaseapp.com",
    projectId: "finalproject-43926",
    storageBucket: "finalproject-43926.appspot.com",
    messagingSenderId: "356710657207",
    appId: "1:356710657207:web:fd60f8615da4743718f132"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)