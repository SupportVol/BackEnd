// Import the functions you need from the SDKs you need
import "firebase/compat/auth";
import "firebase/compat/firestore";
import admin from "firebase-admin";
import serviceAccount from "../path/to/serviceAccountKey.json" assert { type: "json" };
import firebase from "firebase/compat/app";
import "firebase/storage";
import {
  getStorage,
  ref,
  uploadString,
  getDownloadURL,
} from "firebase/storage";
// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAmSpGqd4qk36lj_K9sOnfRN4ZtHCK-YQM",
  authDomain: "support-vol.firebaseapp.com",
  databaseURL:
    "https://support-vol-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "support-vol",
  storageBucket: "support-vol.appspot.com",
  messagingSenderId: "655861372911",
  appId: "1:655861372911:web:a1d577dda3edfc3c43881a",
  measurementId: "G-3FSFLTN1WD",
};
firebase.initializeApp(firebaseConfig);

const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://support-vol-default-rtdb.asia-southeast1.firebasedatabase.app",
  storageBucket: "gs://support-vol.appspot.com",
});
const auth = admin.auth(app);
const firestore = admin.firestore(app);
const storage = getStorage();
export {
  auth,
  firebase,
  app,
  admin,
  firestore,
  storage,
  ref,
  uploadString,
  getDownloadURL,
};
