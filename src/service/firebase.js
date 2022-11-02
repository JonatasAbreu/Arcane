
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBpQR_vEc5eLzKKwpZ4PPVY1w3OHnKhj48",
  authDomain: "arcane-auth.firebaseapp.com",
  projectId: "arcane-auth",
  storageBucket: "arcane-auth.appspot.com",
  messagingSenderId: "68013100911",
  appId: "1:68013100911:web:a32cd0f3e54b268dcee29a"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)