import { Authentication } from "../firebaseCP/authentication.js";
import "../utils/cryptography.js";

export default class Auth {
  constructor(email, password, name) {
    this.email = email;
    this.password = password;
    this.name = name;
  }
  async createUser() {
    const authRef = new Authentication();
    return await authRef.createUser({
      email: this.email,
      password: this.password,
    });
  }

  async loginUser() {
    const authRef = new Authentication();
    return authRef.loginUser(this.email, this.password);
  }
}
