import { Authentication } from "../../firebaseCP/authentication.js";
import Firestore from "../../firebaseCP/firestore.js";

export default class TeamMemberModel {
  constructor(email, password, uid) {
    this.email = email;
    this.password = password;
    this.uid = uid;
    this.auth = new Authentication();
    this.firestore = new Firestore("users", uid);
  }
  createMember() {
    this.auth.createUser({
      email: this.email,
      password: this.password,
    });
    return this.firestore.create({ role: "Organization", level: 0 });
  }

  updateMember() {
    return this.auth.updateUser(this.uid, {
      email: this.email,
      password: this.password,
    });
  }

  deleteMember() {
    this.firestore.delete();
    return this.auth.deleteUser(this.uid);
  }

  getMember() {
    return this.auth.getUser(this.uid);
  }
}
