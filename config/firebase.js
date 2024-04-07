// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { getDatabase } from 'firebase-admin/database';
import { getStorage } from 'firebase-admin/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmSpGqd4qk36lj_K9sOnfRN4ZtHCK-YQM",
  authDomain: "support-vol.firebaseapp.com",
  databaseURL: "https://support-vol-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "support-vol",
  storageBucket: "support-vol.appspot.com",
  messagingSenderId: "655861372911",
  appId: "1:655861372911:web:a1d577dda3edfc3c43881a",
  measurementId: "G-3FSFLTN1WD"
};

// Initialize Firebase
const admin = initializeApp(firebaseConfig);
const auth = getAuth();

// const analytics = getAnalytics(app);
export default { admin, auth };