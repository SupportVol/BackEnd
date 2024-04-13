// Importing the required modules
import bcrypt from "bcrypt";
import saltRounds from "../../config/cryptography.js";

/**
 * This class provides methods for encrypting text using bcrypt.
 */
export default class Encryption {
  /**
   * Constructor for the Encryption class.
   * @param {string} txt - The text to be encrypted.
   */
  constructor(txt) {
    this.txt = txt;
  }

  /**
   * This method encrypts the provided text using bcrypt.
   * @returns {Promise<Array>} A promise that resolves to an array.
   * The first element indicates success (true) or failure (false),
   * and the second element is the resulting hash or error.
   */
  async encrypt() {
    try {
      // Hashing the text
      const hash = await bcrypt.hash(this.txt, saltRounds);
      // If successful, return true and the hash
      return [true, hash];
    } catch (err) {
      // If an error occurs, return false and the error
      return [false, err];
    }
  }
}
