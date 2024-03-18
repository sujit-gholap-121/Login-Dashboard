import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCJKTvaFB5MAIGvIRrpJ8nA7QjnFJGgGdw",
  authDomain: "dashboard---ui.firebaseapp.com",
  projectId: "dashboard---ui",
  storageBucket: "dashboard---ui.appspot.com",
  messagingSenderId: "702706047461",
  appId: "1:702706047461:web:80f52e6a01933040c6370c",
  measurementId: "G-NS1RNK0N7M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const GoogleAuth=new GoogleAuthProvider()