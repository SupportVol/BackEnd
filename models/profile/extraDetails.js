import admin from "../../config/firebase.js";

export default class FirestoreCRUD {
  constructor(collectionName, uid) {
    this.collection = admin.firestore.collection(collectionName);
    this.uid = uid;
  }

  async create(data) {
    try {
      const docRef = await this.collection.doc(this.uid).set(data);
      return docRef.id;
    } catch (error) {
      console.error("Error creating document:", error);
      throw error;
    }
  }

  async read() {
    try {
      const docSnapshot = await this.collection.doc(this.uid).get();
      if (!docSnapshot.exists) {
        throw new Error("Document does not exist");
      }
      return docSnapshot.data();
    } catch (error) {
      console.error("Error reading document:", error);
      throw error;
    }
  }

  async update(data) {
    try {
      await this.collection.doc(this.uid).update(data);
      return true;
    } catch (error) {
      console.error("Error updating document:", error);
      throw error;
    }
  }

  async delete() {
    try {
      await this.collection.doc(this.uid).delete();
      return true;
    } catch (error) {
      console.error("Error deleting document:", error);
      throw error;
    }
  }
}
