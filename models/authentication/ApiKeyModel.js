import Firestore from "../../firebaseCP/firestore.js";
import FirestoreAbstract from "../../utils/firestore/FirestoreAbstract.js";
import updateData from "../../utils/firestore/updateData.js";

export default class ApiKey extends FirestoreAbstract {
  constructor(ownerName, ownerUid, ownerEmail, apiKey) {
    super();
    this.createStructure = {
      ownerName: ownerName,
      uid: ownerUid,
      creationDate: Date.now(),
    };
    this.fs = new Firestore("keys", apiKey);
    const currentRecord = this.read();
    this.updateStructure = updateData(
      ["ownerName", "uid", "email", "creationDate", "updateDate"],
      [ownerName, ownerUid, ownerEmail, undefined, Date.now()],
      currentRecord
    );
  }
}
