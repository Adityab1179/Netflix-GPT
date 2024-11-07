
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";




const firebaseConfig = {
  apiKey: "AIzaSyBjmz2ODqeIOqGQ_13BqdiZtfXhewAM7Wc",
  authDomain: "netflix-gpt-79e7e.firebaseapp.com",
  projectId: "netflix-gpt-79e7e",
  storageBucket: "netflix-gpt-79e7e.appspot.com",
  messagingSenderId: "454343422342",
  appId: "1:454343422342:web:1a550f5c00767379c3bc07",
  measurementId: "G-W17HF1CJNH"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
