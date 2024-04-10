import Firestore from "../firebaseCP/firestore.js";
/**
 * Checks if the user is authorized based on their role.
 * @param {string} uid - The user ID.
 * @returns {Promise<boolean>} - A promise resolving to true if the user is authorized, false otherwise.
 */
const isAuthorized = async (uid) => {
  try {
    const authFS = new Firestore("users", uid);
    const userData = await authFS.read();
    return userData[1]["role"] === "Admin" || userData[1]["role"] === "Org";
  } catch (error) {
    console.error("Error checking user authorization:", error);
    return false;
  }
};

export default isAuthorized;
