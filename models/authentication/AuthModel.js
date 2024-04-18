import { Authentication } from "../../firebaseCP/authentication.js";
import randomImageGenerator from "../../utils/helper/randomImageGenerator.js";

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
    const user = {
      email: this.email,
      password: this.password,
    };
    const response = await this.authRef.createUser(user);
    await this.authRef.updateUser(response[1], {
      photoURL: randomImageGenerator(),
    });
    const link = await this.authRef.verificationEmail(this.email);
    return [response, link];
  }

  /**
   * Login a user.
   * @returns {Promise} A promise that resolves with the logged in user.
   */
  loginUser() {
    return this.authRef.loginUser(this.email, this.password);
  }

  resetPassword() {
    return this.authRef.resetPassword(this.email);
  }
  getAll() {
    return this.authRef.getUsers();
  }
}
