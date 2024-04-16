import { Authentication } from "../../firebaseCP/authentication.js";

/**
 * Class representing authentication operations.
 * @class Auth
 */

export default class Auth {
  /**
   * Create a new Auth instance.
   * @param {string} email - The email of the user.
   * @param {string} password - The password of the user.
   * @param {string} [name=NaN] - The name of the user.
   */
  constructor(email, password) {
    this.email = email;
    this.password = password;
    this.authRef = new Authentication();
  }

  /**
   * Create a new user.
   * @returns {Promise} A promise that resolves with the created user.
   */
  async createUser() {
    console.log(this.email, this.password);
    const user = {
      email: this.email,
      password: this.password,
    };
    const response = await this.authRef.createUser(user);
    const link = await this.authRef.verificationEmail(this.email);
    return [response, link];
  }

  /**
   * Login a user.
   * @returns {Promise} A promise that resolves with the logged in user.
   */
  async loginUser() {
    return await this.authRef.loginUser(this.email, this.password);
  }

  async resetPassword() {
    return await this.authRef.resetPassword(this.email);
  }
}
