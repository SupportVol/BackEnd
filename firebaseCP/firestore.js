import "../config/firebase.js";
import { admin } from "../config/firebase.js";
import getDocumentIdByContent from "../utils/getDocumentIdByContent.js";

export default class Firestore {
  constructor(collectionName, uid) {
    this.collection = admin.firestore().collection(collectionName);
    this.uid = uid;
  }

  async create(data) {
    try {
      if (!this.uid) {
        await this.collection.doc().set(data);
      } else {
        await this.collection.doc(this.uid).set(data);
      }
      const docID = await getDocumentIdByContent(this.collection, data);
      return [true, docID];
    } catch (error) {
      return [false, error.message];
    }
  }

  async read() {
    try {
      const docSnapshot = await this.collection.doc(this.uid).get();
      if (!docSnapshot.exists) {
        return [false, "Document does not exist"];
      }
      return [true, docSnapshot.data()];
    } catch (error) {
      return [false, error.message];
    }
  }

  async update(data) {
    try {
      await this.collection.doc(this.uid).update(data);
      return [true, NaN];
    } catch (error) {
      return [false, error.message];
    }
  }

  async delete() {
    try {
      await this.collection.doc(this.uid).delete();
      return [true, NaN];
    } catch (error) {
      return [false, error.message];
    }
  }

  async readPaths() {
    try {
      const docs = await this.collection.listDocuments();
      const paths = [];
      docs.forEach((doc) => {
        paths.push(doc.path.split("/")[1]);
      });
      return [true, paths];
    } catch (error) {
      return [false, error.message];
    }
  }
}
