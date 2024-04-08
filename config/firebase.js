// Import the functions you need from the SDKs you need
import "firebase/compat/auth";
import "firebase/compat/firestore";
import admin from "firebase-admin";
import serviceAccount from "../path/to/serviceAccountKey.json" assert { type: "json" };

const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://support-vol-default-rtdb.asia-southeast1.firebasedatabase.app",
});
const auth = admin.auth(app);
export default auth;
