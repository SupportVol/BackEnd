import {
  getStorage,
  ref,
  uploadString,
  getDownloadURL,
} from "firebase/storage";
import auth from "../../config/firebase.js";

export default class PFP {
  constructor(uid) {
    this.uid = uid;
    this.storage = getStorage();
  }

  async update(imageBase64) {
    const storageRef = ref(this.storage, `pfp/${this.uid}.png`);
    await uploadString(storageRef, imageBase64, "base64");
    const pUrl = await this.get();
    console.log(pUrl);
    const userRecord = await auth.auth.updateUser(this.uid, {
      photoURL: pUrl,
    });
    console.log(userRecord.toJSON());
    return true, userRecord.toJSON();
  }

  async get() {
    const fileRef = ref(this.storage, `pfp/${this.uid}.png`);
    const downloadURL = await getDownloadURL(fileRef);
    return downloadURL;
  }
}
