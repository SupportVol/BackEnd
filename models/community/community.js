import Firestore from "../../firebaseCP/firestore.js";

/**
 * Represents a Community object.
 * @class
 */
export default class Community {
  /**
   * Create a Community object.
   * @constructor
   * @param {string} uid - The user ID.
   * @param {string} communityUID - The community UID.
   */
  constructor(uid, communityUID) {
    this.uid = uid;
    this.collectionName = "communities";
    this.communityUID = communityUID;
    this.prjFirestore = new Firestore(this.collectionName, this.communityUID);
  }

  /**
   * Creates a new document in the community collection.
   * @param {object} userData - The user data to be stored.
   * @returns {Promise} A promise that resolves to an array indicating success or failure.
   */
  async create(userData) {
    try {
      return await this.prjFirestore.create(userData);
    } catch (error) {
      return [false, error.message];
    }
  }

  /**
   * Reads all documents in the community collection.
   * @returns {Promise} A promise that resolves to an array containing the documents.
   */
  async read() {
    try {
      let paths = await this.prjFirestore.readPaths();
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

  /**
   * Updates a document in the community collection.
   * @param {object} userData - The updated user data.
   * @returns {Promise} A promise that resolves to an array indicating success or failure.
   */
  async update(userData) {
    try {
      await this.prjFirestore.update(userData);
      return [true, NaN];
    } catch (error) {
      return [false, error.message];
    }
  }

  /**
   * Deletes a document from the community collection.
   * @returns {Promise} A promise that resolves to an array indicating success or failure.
   */
  async delete() {
    try {
      await this.prjFirestore.delete();
      return [true, NaN];
    } catch (error) {
      return [false, error.message];
    }
  }
}
