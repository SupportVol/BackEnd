// Importing bcrypt for encryption
import bcrypt from "bcrypt";

/**
 * Decryption class to handle decryption related operations
 */
export default class Decryption {
  /**
   * Constructor for the Decryption class
   * @param {string} encrypted - The encrypted text.
   * @param {string} txt - The text to be compared for decryption.
   */
  constructor(encrypted, txt) {
    this.encrypted = encrypted;
    this.txt = txt;
  }

  /**
   * Compares the provided text with the encrypted text to check for a match.
   * @returns {Promise<Array>} A promise that resolves to an array.
   * The first element indicates success or failure, the second element is the result of the comparison or the error.
   */
  async compare() {
    try {
      // Comparing the text with the encrypted text
      const result = await bcrypt.compare(this.txt, this.encrypted);
      // If successful, return an array with true and the result
      return [true, result];
    } catch (err) {
      // If an error occurs, return an array with false and the error
      return [false, err];
    }
  }
}
