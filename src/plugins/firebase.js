// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMxrkPeKbGBatPWNPlMk7J7O4JHyjy1Gk",
  authDomain: "avaliacao2-fds.firebaseapp.com",
  databaseURL: "https://avaliacao2-fds-default-rtdb.firebaseio.com",
  projectId: "avaliacao2-fds",
  storageBucket: "avaliacao2-fds.appspot.com",
  messagingSenderId: "636767675799",
  appId: "1:636767675799:web:29189af7a1bc55c25350d2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;
