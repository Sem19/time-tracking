// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASdo3dN99ypp3CthFMuKgUQeZYX3bUJuU",
  authDomain: "time-tracking-47330.firebaseapp.com",
  projectId: "time-tracking-47330",
  storageBucket: "time-tracking-47330.firebasestorage.app",
  messagingSenderId: "667784193431",
  appId: "1:667784193431:web:878d8b80b171e51b7ed0d2",
  databaseURL:
    "https://time-tracking-47330-default-rtdb.europe-west1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getDatabase(app);
