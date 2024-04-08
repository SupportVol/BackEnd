import auth from "../../config/firebase.js";
// import getStorage from "firebase-admin/storage";
import { getStorage, ref, uploadBytes } from "firebase/storage";

export default class PFP {
  constructor(uid) {
    this.uid = uid;
    this.storage = getStorage();
  }
  update(byteArray) {
    const storageRef = ref(getStorage(), "pfp");
    const bytes = new Uint8Array(byteArray);
    uploadBytes(storageRef, bytes).then((snapshot) => {
      console.log(snapshot);
    });
    const path = ref(this.storage, `pfp/{this.uid}.png`).file().fullPath;
    console.log(path);
    return true, userRecord.toJSON().phoneNumber;
  }
  async get() {
    const fileRef = this.storage.bucket("pfp").file(`{this.uid}.png`);
    const downloadURL = await getDownloadURL(fileRef);
    return downloadURL;
  }
}

class PFP_Storage {
  constructor(uid) {
    this.uid = uid;
  }
  async get() {}

  update() {}
}
