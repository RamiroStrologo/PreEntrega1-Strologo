import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9UkgjwPXvs97JRzC4F-XyG9ChhAfCRiw",
  authDomain: "darkgame-appweb.firebaseapp.com",
  projectId: "darkgame-appweb",
  storageBucket: "darkgame-appweb.appspot.com",
  messagingSenderId: "907459665315",
  appId: "1:907459665315:web:5bdac698d0dbe7cb724e16",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
