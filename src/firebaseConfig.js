// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkHz7z7NwYzXal4TlfdKprm7UThD7f3W4",
  authDomain: "crud-desafio-1ef8d.firebaseapp.com",
  projectId: "crud-desafio-1ef8d",
  storageBucket: "crud-desafio-1ef8d.firebasestorage.app",
  messagingSenderId: "22956238847",
  appId: "1:22956238847:web:5287753374207afe2da9ca",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
