import { Authentication } from "../../firebaseCP/authentication.js";
import {Storage} from "../../firebaseCP/storage.js";
// Importing the Authentication class from firebaseCP

/**
 * Middleware function to initialize the authentication object.
 * This function creates a new instance of the Authentication class and attaches it to the request object.
 * This allows subsequent middleware and route handlers to use this authentication object.
 *
 * @param {Object} req - The request object.
 * @param {Object} _ - The response object (unused).
 * @param {Function} next - The next middleware function.
 */
const initAuthentication = (req, _, next) => {
  // Create a new instance of Authentication and attach it to the request object
  req.auth = Authentication();
  req.storage = Storage();
  // Call the next middleware function
  next();
};

// Export the middleware function
export default initAuthentication;
