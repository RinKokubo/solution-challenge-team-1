import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, query, where, getDocs, updateDoc, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAUUkfevucxZPR_WqeGK7lXzEQ2gEdVm9s",
    authDomain: "solution-challenge1.firebaseapp.com",
    projectId: "solution-challenge1",
    storageBucket: "solution-challenge1.appspot.com",
    messagingSenderId: "953543125408",
    appId: "1:953543125408:web:de058fd247d71fb9b8dcc5"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, collection, query, where, getDocs, updateDoc, addDoc };