import { Authentication } from "../../firebaseCP/authentication";
import { auth } from "../config/firebase.js";

export default class Ban extends Authentication {
  constructor(uid) {
    this.uid = uid;
  }
  async banUser() {
    try {
      const res = await auth.setCustomUserClaims(this.uid, { banned: true });
      return [true, res];
    } catch (error) {
      return [false, error.message];
    }
  }
  async isUserBanned() {
    const user = await admin.auth().getUser(this.uid);
    return user.customClaims && user.customClaims.banned;
  }
  async unBanUser() {
    try {
      const res = await auth.setCustomUserClaims(this.uid, { banned: false });
      return [true, res];
    } catch (error) {
      return [false, error.message];
    }
  }
}
