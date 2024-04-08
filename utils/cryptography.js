import bcrypt from "bcrypt";
import saltRounds from "../config/cryptography.js";
class Encryption {
  constructor(txt) {
    this.txt = txt;
  }

  encrypt() {
    bcrypt.hash(this.txt, saltRounds, (err, hash) => {
      if (err) {
        return false, err;
      } else {
        return true, hash;
      }
    });
  }
}

class Decryption {
  constructor(encrypted, txt) {
    this.encrypted = encrypted;
    this.txt = txt;
  }

  compare() {
    bcrypt.compare(this.txt, this.encrypted, (err, result) => {
      if (err) {
        return false, err;
      } else if (result) {
        return true, result;
      } else {
        return false, "Password does not match!";
      }
    });
  }
}

export default Encryption;
