import { admin } from "../config/firebase.js";
import getDocumentIdByContent from "../utils/data/getDocumentIdByContent.js";

/**
 * Firestore class for performing CRUD operations on Firestore collections.
 */
export default class Firestore {
  /**
   * Constructor for Firestore class.
   * @param {string} collectionName - The name of the Firestore collection.
   * @param {string} uid - The unique identifier for the document.
   */
  constructor(collectionName, uid, nestedPaths = []) {
    this.collectionName = collectionName;
    this.collection = admin.firestore().collection(collectionName);
    this.uid = uid;
    this.nestedPaths = nestedPaths;
  }

  /**
   * Create a new document in the Firestore collection.
   * @param {Object} data - The data to be added to the document.
   * @returns {[boolean, string]} - An array indicating success (true/false) and the document ID.
   */
  async create(data) {
    try {
      let collectionRef = this.collection;
      // Traverse through nested paths and create collection references
      for (const path of this.nestedPaths) {
        collectionRef = collectionRef.doc(path).collection(path);
      }
      const docRef = this.uid
        ? this.collection.doc(this.uid)
        : this.collection.doc();
      await docRef.set(data);
      const docID = await getDocumentIdByContent(this.collection, data);
      return [true, docID];
    } catch (error) {
      return [false, error.message];
    }
  }

  /**
   * Read a document from the Firestore collection.
   * @returns {[boolean, Object]} - An array indicating success (true/false) and the document data.
   */
  async read() {
    try {
      let collectionRef = this.collection;
      // Traverse through nested paths and create collection references
      for (const path of this.nestedPaths) {
        collectionRef = collectionRef.doc(path).collection(path);
      }
      const docSnapshot = await collectionRef.doc(this.uid).get();
      if (!docSnapshot.exists) {
        return [false, "Document does not exist"];
      }
      return [true, docSnapshot.data()];
    } catch (error) {
      return [false, error.message];
    }
  }

  /**
   * Update a document in the Firestore collection.
   * @param {Object} data - The data to update the document with.
   * @returns {[boolean, NaN]} - An array indicating success (true/false) and NaN (no data returned).
   */
  async update(data) {
    try {
      let collectionRef = this.collection;
      // Traverse through nested paths and create collection references
      for (const path of this.nestedPaths) {
        collectionRef = collectionRef.doc(path).collection(path);
      }
      await collectionRef.doc(this.uid).update(data);
      return [true, NaN];
    } catch (error) {
      return [false, error.message];
    }
  }

  /**
   * Delete a document from the Firestore collection.
   * @returns {[boolean, NaN]} - An array indicating success (true/false) and NaN (no data returned).
   */
  async delete() {
    try {
      let collectionRef = this.collection;
      // Traverse through nested paths and create collection references
      for (const path of this.nestedPaths) {
        collectionRef = collectionRef.doc(path).collection(path);
      }
      await collectionRef.doc(this.uid).delete();
      return [true, NaN];
    } catch (error) {
      return [false, error.message];
    }
  }

  /**
   * Retrieve all paths of documents in the Firestore collection.
   * @returns {[boolean, string[]]} - An array indicating success (true/false) and an array of document paths.
   */
  async readPaths() {
    try {
      let collectionRef = this.collection;

      // Traverse through nested paths and create collection references
      for (const path of this.nestedPaths) {
        collectionRef = collectionRef.doc(path).collection(path);
      }

      const docs = await collectionRef.listDocuments();
      const paths = docs.map((doc) => doc.path.split("/")[1]);
      return [true, paths];
    } catch (error) {
      return [false, error.message];
    }
  }
  async readAll() {
    try {
      let paths = await this.readPaths();
      paths = paths[1];
      let allDocs = {};
      for (let i = 0; i < paths.length; i++) {
        const iterFirestore = new Firestore(this.collectionName, paths[i]);
        const docSnapshot = await iterFirestore.read();
        allDocs[paths[i]] = docSnapshot[1];
      }
      return [true, allDocs];
    } catch (error) {
      return [false, error.message];
    }
  }
}
