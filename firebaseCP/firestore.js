import "../config/firebase.js";

export default class Firestore {
  constructor(collectionName, uid) {
    this.collection = admin.firestore.collection(collectionName);
    this.uid = uid;
  }

  async create(data) {
    try {
      const docRef = await this.collection.doc(this.uid).set(data);
      return true, docRef.id;
    } catch (error) {
      return false, error.message;
    }
  }

  async read() {
    try {
      const docSnapshot = await this.collection.doc(this.uid).get();
      if (!docSnapshot.exists) {
        return false, "Document does not exist";
      }
      return true, docSnapshot.data();
    } catch (error) {
      return false, error.message;
    }
  }

  async update(data) {
    try {
      await this.collection.doc(this.uid).update(data);
      return true, NaN;
    } catch (error) {
      return false, error.message;
    }
  }

  async delete() {
    try {
      await this.collection.doc(this.uid).delete();
      return true, NaN;
    } catch (error) {
      return false, error.message;
    }
  }
}
