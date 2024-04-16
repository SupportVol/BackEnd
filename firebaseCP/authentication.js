import { auth, firebase } from "../config/firebase.js";

/**
 * Class representing authentication functionalities.
 */
export class Authentication {
  /**
   * Creates a new user with the provided user data.
   * @param {object} userData - The user data to create the user.
   * @returns {Promise<[boolean, string]>} - A tuple indicating success status and the user ID.
   */
  async createUser(userData) {
    try {
      const userRecord = await auth.createUser(userData);
      console.log(userRecord);
      return [true, userRecord.uid];
      // return userRecord.uid;
    } catch (error) {
      return [false, error.message];
    }
  }
  async verificationEmail(email) {
    return await auth.generateEmailVerificationLink(email);
  }
  /**
   * Logs in the user with the provided email and password.
   * @param {string} email - The user's email.
   * @param {string} password - The user's password.
   * @returns {Promise<[boolean, string]>} - A tuple indicating success status and the user ID.
   */
  async loginUser(email, password) {
    try {
      const userRecord = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      return [true, userRecord.user.uid];
    } catch (error) {
      return [false, error.message];
    }
  }

  /**
   * Updates the user with the provided user ID and update data.
   * @param {string} uid - The user ID to update.
   * @param {object} updateUserData - The data to update the user with.
   * @returns {Promise<[boolean, object]>} - A tuple indicating success status and the updated user data.
   */
  async updateUser(uid, updateUserData) {
    try {
      console.log(uid, updateUserData);
      const userRecord = await auth.updateUser(uid, updateUserData);
      return [true, userRecord.toJSON()];
    } catch (error) {
      return [false, error.message];
    }
  }

  /**
   * Retrieves the user with the provided user ID.
   * @param {string} uid - The user ID to retrieve.
   * @returns {Promise<[boolean, object]>} - A tuple indicating success status and the retrieved user data.
   */
  async getUser(uid) {
    try {
      const user = await auth.getUser(uid);
      return [true, user];
    } catch (error) {
      return [false, error.message];
    }
  }

  /**
   * Deletes the user with the provided user ID.
   * @param {string} uid - The user ID to delete.
   * @returns {Promise<[boolean, string]>} - A tuple indicating success status and the deleted user ID.
   */
  async deleteUser(uid) {
    try {
      await auth.deleteUser(uid);
      return [true, uid];
    } catch (error) {
      return [false, error.message];
    }
  }

  async createPhoneVerification(phoneNumber) {
    const request = await auth.createSessionCookie(phoneNumber, {
      expiresIn: 3600,
    });
    return request;
  }

  async verityPhoneVerification(verificationId, otp) {
    const userCreds = await auth.verifySessionCookie(verificationId, otp);
    return userCreds;
  }

  async resetPassword(email) {
    const request = await auth.sendPasswordResetEmail(email);
    return request;
  }
}
