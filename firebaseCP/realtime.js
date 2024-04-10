import "../config/firebase.js";
import {
  getDatabase,
  ref,
  push,
  child,
  set,
  get,
  remove,
} from "firebase/database";
export default class RealTime {
  constructor(r) {
    this.database = getDatabase();
    this.itemsRef = ref(this.database, r);
  }

  // Create operation
  async create(data) {
    try {
      if (Object.values(data).some((value) => value === undefined)) {
        return [false, "Data contains undefined values"];
      }
      const newItemRef = push(this.itemsRef);
      await set(newItemRef, data);
      return [true, newItemRef.key];
    } catch (error) {
      return [false, error.message];
    }
  }

  // Read operation
  async read() {
    try {
      const snapshot = await get(this.itemsRef);
      const items = [];
      snapshot.forEach((childSnapshot) => {
        items.push({ id: childSnapshot.key, ...childSnapshot.val() });
      });
      return [true, items];
    } catch (error) {
      return [false, error.message];
    }
  }

  // Update operation
  async update(id, newData) {
    try {
      const itemRef = child(this.itemsRef, id);
      await set(itemRef, newData);
      return [true, true];
    } catch (error) {
      return [false, error.message];
    }
  }

  // Delete operation
  async delete(id) {
    try {
      const itemRef = child(this.itemsRef, id);
      await remove(itemRef);
      return [true, true];
    } catch (error) {
      return [false, error.message];
    }
  }
}
