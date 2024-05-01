// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-real-estate-44739.firebaseapp.com",
  projectId: "mern-real-estate-44739",
  storageBucket: "mern-real-estate-44739.appspot.com",
  messagingSenderId: "83612682708",
  appId: "1:83612682708:web:05ba164d1000c275806e41"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);