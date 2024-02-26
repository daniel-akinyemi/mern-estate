// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-766f3.firebaseapp.com",
  projectId: "mern-estate-766f3",
  storageBucket: "mern-estate-766f3.appspot.com",
  messagingSenderId: "233007213148",
  appId: "1:233007213148:web:dc66aa84bbd6b1e0031499"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);