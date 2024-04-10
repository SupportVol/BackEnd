import bcrypt from "bcrypt";

/**
 * Class for handling encryption.
 */
class Encryption {
  /**
   * Create an Encryption object.
   * @param {string} txt - The text to be encrypted.
   */
  constructor(txt) {
    this.txt = txt;
  }

  /**
   * Encrypts the provided text using bcrypt.
   * @returns {Promise<Array>} A promise resolving to an array indicating success or failure and the resulting hash.
   */
  async encrypt() {
    try {
      const hash = await bcrypt.hash(this.txt, saltRounds);
      return [true, hash];
    } catch (err) {
      return [false, err];
    }
  }
}

/**
 * Class for handling decryption.
 */
class Decryption {
  /**
   * Create a Decryption object.
   * @param {string} encrypted - The encrypted text.
   * @param {string} txt - The text to be compared for decryption.
   */
  constructor(encrypted, txt) {
    this.encrypted = encrypted;
    this.txt = txt;
  }

  /**
   * Compares the provided text with the encrypted text to check for a match.
   * @returns {Promise<Array>} A promise resolving to an array indicating success or failure and the result of the comparison.
   */
  async compare() {
    try {
      const result = await bcrypt.compare(this.txt, this.encrypted);
      return [true, result];
    } catch (err) {
      return [false, err];
    }
  }
}

export { Encryption, Decryption };
