import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAERxrEFqAmNM7srWyJ6Ktv_jnf3B5JmyQ",
  authDomain: "house-marketplace-projec-8ed96.firebaseapp.com",
  projectId: "house-marketplace-projec-8ed96",
  storageBucket: "house-marketplace-projec-8ed96.appspot.com",
  messagingSenderId: "144182568569",
  appId: "1:144182568569:web:fb123b286d9129142416a8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
