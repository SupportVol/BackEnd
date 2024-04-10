/**
 * Class representing authentication operations.
 */
import { Authentication } from "../firebaseCP/authentication.js";

export default class Auth {
  /**
   * Create an Auth instance.
   * @param {string} email - The email of the user.
   * @param {string} password - The password of the user.
   * @param {string} name - The name of the user.
   */
  constructor(email, password, name) {
    this.email = email;
    this.password = password;
    this.name = name;
    this.authRef = new Authentication();
  }

  /**
   * Create a new user.
   * @returns {Promise} A promise that resolves with the created user.
   */
  async createUser() {
    return await this.authRef.createUser({
      email: this.email,
      password: this.password,
    });
  }

  /**
   * Login a user.
   * @returns {Promise} A promise that resolves with the logged-in user.
   */
  async loginUser() {
    return await this.authRef.loginUser(this.email, this.password);
  }
}
