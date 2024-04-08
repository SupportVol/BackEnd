// import { getStorage } from "firebase-admin/storage";
import { getStorage } from "firebase/storage";
import app from "../../config/firebase.js";

export default class PFP {
  constructor(uid) {
    this.uid = uid;
    this.storage = getStorage(app);
  }
  async update(localFilePath) {
    const storageRef = this.storage.ref();
    const fileRef = storageRef.child(`pfp/${this.uid}.png`);
    await fileRef.put(localFilePath);
    return true, userRecord.toJSON().phoneNumber;
  }
  async get() {
    const fileRef = this.storage.bucket("pfp").file(`${this.uid}.png`);
    const downloadURL = await getDownloadURL(fileRef);
    return downloadURL;
  }
}
