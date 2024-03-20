import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyBRkkr80cOEtE2fpdR9AYtv7esRx0p4oIw",
  authDomain: "crossconnect-bc458.firebaseapp.com",
  projectId: "crossconnect-bc458",
  storageBucket: "crossconnect-bc458.appspot.com",
  messagingSenderId: "795150713771",
  appId: "1:795150713771:web:ae6750ae642dbf453b48ee",
  measurementId: "G-CGZ7W54XB1",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, auth, functions };
