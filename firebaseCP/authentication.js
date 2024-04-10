import { auth, firebase } from "../config/firebase.js";

export class Authentication {
  async createUser(userData) {
    try {
      const userRecord = await auth.createUser(userData);
      return [true, userRecord.uid];
    } catch (error) {
      return [false, error.message];
    }
  }

  async loginUser(email, password) {
    try {
      const userRecord = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      return [true, userRecord.uid];
    } catch (error) {
      return [false, error.message];
    }
  }

  async updateUser(uid, updateUserData) {
    try {
      const userRecord = await auth.updateUser(uid, updateUserData);
      return [true, userRecord.toJSON()];
    } catch (error) {
      return [false, error.message];
    }
  }
  async getUser(uid) {
    try {
      const user = await auth.getUser(uid);
      return [true, user];
    } catch (error) {
      return [false, error.message];
    }
  }
  async deleteUser(uid) {
    try {
      await auth.deleteUser(uid);
      return [true, uid];
    } catch (error) {
      return [false, error.message];
    }
  }
}
