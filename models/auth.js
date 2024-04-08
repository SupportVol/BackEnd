import auth from "../config/firebase.js";
import firebase from "firebase/compat/app";
import "firebase/auth";

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

// import Encryptionn from '../utils/cryptography.js'
export default class Auth {
  constructor(email, password) {
    this.email = email;
    this.password = password;
    this.details = { email: this.email, password: this.password };
  }
  async createUser() {
    try {
      //   this.details.password = Encryption(this.password);
      console.log(this.details);
      const userRecord = await auth.createUser(this.details);
      console.log(userRecord);
      return true, userRecord.uid;
    } catch (error) {
      return false, error.message;
    }
  }

  async loginUser() {
    try {
      // const userRecord = await auth.getUserByEmail(this.email);
      // console.log(userRecord);
      const userRecord = await firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password);
      console.log(userRecord);
      return true, userRecord.uid;
    } catch (error) {
      return false, error.message;
    }
  }
}
