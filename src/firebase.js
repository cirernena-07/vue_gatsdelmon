import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBB-cIkeepe0vwj7rtqZ9QUnZIcvCpV4rU",
  authDomain: "gats-del-mon.firebaseapp.com",
  projectId: "gats-del-mon",
  storageBucket: "gats-del-mon.firebasestorage.app",
  messagingSenderId: "387423960728",
  appId: "1:387423960728:web:b582ed5b955f625311daed"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);