// Importing necessary modules
import Storage from "../../firebaseCP/storage.js";
import { Authentication } from "../../firebaseCP/authentication.js";

/**
 * Initializes user-related objects and paths for profile picture.
 * @param {object} req - The request object.
 * @param {object} _ - The response object (unused).
 * @param {function} next - The next middleware function.
 */
const pfpInitiateObjects = (req, _, next) => {
  // Initialize Storage and Authentication objects
  req.storage = new Storage();
  req.auth = new Authentication();
  next();
};

// Exporting the function
export default pfpInitiateObjects;
