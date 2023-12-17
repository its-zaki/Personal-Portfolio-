import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDIhtu9bSM6qcMuhJ85M8wx6AVM9ev3URM",
  authDomain: "portfolio-691c6.firebaseapp.com",
  projectId: "portfolio-691c6",
  storageBucket: "portfolio-691c6.appspot.com",
  messagingSenderId: "473899877450",
  appId: "1:473899877450:web:379e6285cffdda1f64d2b3",
  measurementId: "G-SLW6J2VMQ8"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)