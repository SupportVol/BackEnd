/**
 * Import necessary modules from Firebase SDKs.
 */
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import {
  getStorage,
  ref,
  uploadString,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import admin from "firebase-admin";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import { getPerformance } from "firebase/performance";

/**
 * Path to the service account key JSON file.
 */
import serviceAccount from "../path/to/serviceAccountKey.json" assert { type: "json" };

/**
 * Firebase configuration object.
 */
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

/**
 * Initialize Firebase with the provided configuration.
 */
firebase.initializeApp(firebaseConfig);

/**
 * Initialize the Firebase Admin SDK with the service account credentials.
 */
const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://support-vol-default-rtdb.asia-southeast1.firebasedatabase.app",
  storageBucket: "gs://support-vol.appspot.com",
});
// const perf = getPerformance(app);

// const appCheck = initializeAppCheck(app, {
//   provider: new ReCaptchaV3Provider('6LcDPb0pAAAAAPTKJ7VYKGiSv7C7NJpbEosci6Yh'),
//   isTokenAutoRefreshEnabled: true
// });

/**
 * Auth module from Firebase Admin SDK.
 */
const auth = admin.auth(app);

/**
 * Firestore module from Firebase Admin SDK.
 */
const firestore = admin.firestore(app);

/**
 * Storage module from Firebase SDK.
 */
const storage = getStorage();

/**
 * Export necessary modules and functions.
 */
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
  deleteObject,
};
