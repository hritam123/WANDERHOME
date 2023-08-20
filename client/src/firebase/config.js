// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0MioBMIk0kvqP6tivo3iNrb6HZAJooyw",
  authDomain: "wanderhome-391514.firebaseapp.com",
  projectId: "wanderhome-391514",
  storageBucket: "wanderhome-391514.appspot.com",
  messagingSenderId: "653252098418",
  appId: "1:653252098418:web:4223357e72e090200805eb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();