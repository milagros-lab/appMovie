import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDBSwLsaUlUOCyCVi-QblDJy8fhHxu77iM",
  authDomain: "neflix-clone-95306.firebaseapp.com",
  projectId: "neflix-clone-95306",
  storageBucket: "neflix-clone-95306.appspot.com",
  messagingSenderId: "1044906496286",
  appId: "1:1044906496286:web:ff0c275435f2fb6668f90f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuth = new GoogleAuthProvider();
export const database = getFirestore(app);
