// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzmM3ztf8x304erx53esZfelriUfgqCAo",
  authDomain: "gpt-sms.firebaseapp.com",
  projectId: "gpt-sms",
  storageBucket: "gpt-sms.appspot.com",
  messagingSenderId: "85766567466",
  appId: "1:85766567466:web:b48b71440e8105eba1b553",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
