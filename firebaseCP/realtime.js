import "../config/firebase";

export default class RealTime {
  constructor() {
    this.database = firebase.database();
  }

  // Create operation
  create(data, ref) {
    const newDataRef = this.database.ref(ref).push();
    return newDataRef.set(data);
  }

  // Read operation
  async read(ref, docID) {
    const snapshot = await this.database.ref(ref).once(docID);
    const data = snapshot.val();
    return data
      ? Object.entries(data).map(([key, value]) => ({ id: key, ...value }))
      : [];
  }

  // Update operation
  update(id, newData, ref) {
    return this.database.ref(ref).child(id).update(newData);
  }

  // Delete operation
  delete(id, ref) {
    return this.database.ref(ref).child(id).remove();
  }
}
