// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBQUcZDjmDGwShQLSsMN9KXS2Jy0lXfO0",
  authDomain: "camilla-rocha-galeria.firebaseapp.com",
  projectId: "camilla-rocha-galeria",
  storageBucket: "camilla-rocha-galeria.appspot.com",
  messagingSenderId: "53067000433",
  appId: "1:53067000433:web:23069ad2cab882af0189d0",
  measurementId: "G-633TWTK5B0"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export default app;
