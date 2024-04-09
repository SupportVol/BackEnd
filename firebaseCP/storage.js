import "../config/firebase.js";

export class Storage {
  async uploadByte8Array(path, imageBase64) {
    try {
      const storageRef = ref(storage, path);
      await uploadString(storageRef, imageBase64, "base64");
      return true, userRecord.toJSON(), this.getDownloadURL(path);
    } catch (error) {
      return false, error.message, NaN;
    }
  }
  // Upload a file to Firebase Storage
  async uploadFile(file, path) {
    try {
      const storageRef = ref(storage, path);
      const snapshot = await storageRef.put(file);
      return true, snapshot.ref.getDownloadURL();
    } catch (error) {
      console.error("Error uploading file:", error);
      return false, error;
    }
  }

  // Get download URL of a file from Firebase Storage
  async getDownloadURL(path) {
    try {
      const storageRef = ref(storage, path);
      return true, storageRef.getDownloadURL();
    } catch (error) {
      console.error("Error getting download URL:", error);
      return false, error.message;
    }
  }

  // Delete a file from Firebase Storage
  async deleteFile(path) {
    try {
      const storageRef = ref(storage, path);
      await storageRef.delete();
      return true, this.getDownloadURL(path);
    } catch (error) {
      console.error("Error deleting file:", error);
      return false, error.message;
    }
  }
}

export default Storage;
