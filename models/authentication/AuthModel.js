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
    const user = {
      email: this.email,
      password: this.password,
    };
    const response = await this.authRef.createUser(user);
    await this.authRef.updateUser(response[1], {photoURL:"https://www.pngfind.com/pngs/m/676-6764065_default-profile-picture-transparent-hd-png-download.png"})
    return response;
  }

  /**
   * Login a user.
   * @returns {Promise} A promise that resolves with the logged in user.
   */
  async loginUser() {
    return await this.authRef.loginUser(this.email, this.password);
  }
}
