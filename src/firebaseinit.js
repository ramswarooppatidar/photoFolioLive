// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-apS5UE8p79ren9yK5sm0jVWH5zRMcok",
  authDomain: "photofolio-d987a.firebaseapp.com",
  projectId: "photofolio-d987a",
  storageBucket: "photofolio-d987a.appspot.com",
  messagingSenderId: "1089833467400",
  appId: "1:1089833467400:web:4a34303e27e21cc2eb5bbd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const db = getFirestore(app)
// export {db}