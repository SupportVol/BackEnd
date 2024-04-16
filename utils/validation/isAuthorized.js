import Firestore from "../../firebaseCP/firestore.js";

/**
 * Checks if the user is authorized based on their role and level.
 * @param {string} uid - The user ID.
 * @param {string[]} roles - The roles allowed to access the resource.
 * @param {number[]} level - The levels allowed to access the resource.
 * @param {Object} req - The request object.
 * @returns {Promise<boolean>} - A promise resolving to true if the user is authorized, false otherwise.
 */
const isAuthorized = async (
  uid,
  roles = ["Admin", "Organization", "Volunteer"],
  level = [],
) => {
  try {
    const authFS = new Firestore("users", uid);
    const userData = await authFS.read()[1];
    const allowed =
      roles.includes(userData.role) && level.includes(userData.level);
    return allowed ? true : ["Not authorized", 401];
  } catch (error) {
    console.error("Error checking user authorization:", error.message);
    return false;
  }
};

export default isAuthorized;
