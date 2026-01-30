// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcYmH386lcvugESC0nzdJs6J3kTkBBNFo",
  authDomain: "my-ecommerch-projects.firebaseapp.com",
  projectId: "my-ecommerch-projects",
  storageBucket: "my-ecommerch-projects.firebasestorage.app",
  messagingSenderId: "756606124353",
  appId: "1:756606124353:web:85f766e8feba3e5706a1c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);