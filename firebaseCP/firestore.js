import { admin } from "../config/firebase.js";
import getDocumentIdByContent from "../utils/getDocumentIdByContent.js";

/**
 * Firestore class for performing CRUD operations on Firestore collections.
 */
export default class Firestore {
  /**
   * Constructor for Firestore class.
   * @param {string} collectionName - The name of the Firestore collection.
   * @param {string} uid - The unique identifier for the document.
   */
  constructor(collectionName, uid) {
    this.collection = admin.firestore().collection(collectionName);
    this.uid = uid;
  }

  /**
   * Create a new document in the Firestore collection.
   * @param {Object} data - The data to be added to the document.
   * @returns {[boolean, string]} - An array indicating success (true/false) and the document ID.
   */
  async create(data) {
    try {
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
      const docSnapshot = await this.collection.doc(this.uid).get();
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
      await this.collection.doc(this.uid).update(data);
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
      await this.collection.doc(this.uid).delete();
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
      const docs = await this.collection.listDocuments();
      const paths = docs.map((doc) => doc.path.split("/")[1]);
      return [true, paths];
    } catch (error) {
      return [false, error.message];
    }
  }
}
