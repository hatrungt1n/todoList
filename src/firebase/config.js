import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA5BZbWsTzRTZY2tD6zM5OnTZmm_1pmIrA",
  authDomain: "todolist-b353f.firebaseapp.com",
  projectId: "todolist-b353f",
  storageBucket: "todolist-b353f.appspot.com",
  messagingSenderId: "189738767771",
  appId: "1:189738767771:web:cce636505752f74f1afd3e",
  measurementId: "G-R5GH91HBTW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
