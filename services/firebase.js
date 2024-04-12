import admin from "firebase-admin";
import serviceAccount from "../path/to/serviceAccountKey.json" assert { type: "json" };
exports.init = () => {
  /*
   * Init your firebase app
   */
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL:
      "https://support-vol-default-rtdb.asia-southeast1.firebasedatabase.app",
  });
};
