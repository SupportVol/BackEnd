import { Authentication } from "../firebaseCP/authentication";
import Storage from "../firebaseCP/storage";
import Firestore from "../firebaseCP/firestore";

export default class userDetails {
  constructor(uid) {
    this.uid = uid;
    this.storage = new Storage();
    this.auth = new Authentication();
    this.firestore = new Firestore("users", this.uid);
  }

  getPhoneNumber() {
    return this.auth.getUser(this.uid).phoneNumber;
  }

  updatePhoneNumber(newPhoneNumber) {
    return this.auth.updateUser(this.uid, {
      phoneNumber: newPhoneNumber,
    });
  }
  getExtraDetails() {
    return this.firestore.read();
  }
  updateExtraDetails(extraDetails) {
    return this.firestore.update(extraDetails);
  }
}
