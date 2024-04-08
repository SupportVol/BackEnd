import { firestore } from "firebase";

class User {
  constructor(uid, name) {
    this.uid = uid;
    this.name = name;
  }
  initalizeUser() {
    Firestore.collection("users").doc(this.uid).set({ name: this.name });
  }
}

module.exports = User;
