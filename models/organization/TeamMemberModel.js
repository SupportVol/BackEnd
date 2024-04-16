import { Authentication } from "../../firebaseCP/authentication";
import Firestore from "../../firebaseCP/firestore";

export default class TeamMemberModel {
  constructor(email, password, uid) {
    this.email = email;
    this.password = password;
    this.uid = uid;
    this.auth = new Authentication();
    this.firestore = new Firestore("users", uid);
  }
  async createMember() {
    await this.auth.createUser({
      email: this.email,
      password: this.password,
    });
    return this.firestore.create({ role: "Organization", level: 0 });
  }

  async updateMember() {
    return await this.auth.updateUser(this.uid, {
      email: this.email,
      password: this.password,
    });
  }

  async deleteMember() {
    await this.firestore.delete();
    return await this.auth.deleteUser(this.uid);
  }

  async getMember() {
    return await this.auth.getUser(this.uid);
  }
}
