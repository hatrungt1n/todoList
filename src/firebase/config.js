import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCQBsLvSV3eBeXJZvgwycL6oSs5JxiTStI",
  authDomain: "todolist-43d6f.firebaseapp.com",
  projectId: "todolist-43d6f",
  storageBucket: "todolist-43d6f.appspot.com",
  messagingSenderId: "961296611512",
  appId: "1:961296611512:web:0dc2376e0f8db474535c4d",
  measurementId: "G-6ZM8B01PHH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
