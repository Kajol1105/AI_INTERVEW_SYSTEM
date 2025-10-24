import { initializeApp, getApps, getApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCBTx7O3DzItq0FcFKclc61XPOyB3jSYEY",
    authDomain: "interview-system-d9420.firebaseapp.com",
    projectId: "interview-system-d9420",
    storageBucket: "interview-system-d9420.firebasestorage.app",
    messagingSenderId: "42748930471",
    appId: "1:42748930471:web:c96bb7b8aa28e6ea03ee82",
    measurementId: "G-WZBLVH6DL5"
};

// Initialize Firebase
const app = !getApps.length? initializeApp(firebaseConfig): getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);