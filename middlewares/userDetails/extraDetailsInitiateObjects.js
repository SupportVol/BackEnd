/**
 * This module exports a middleware function that attaches a Firestore instance to the request object.
 * This Firestore instance is specifically for accessing user data.
 * 
 * @module extraDetailsInitiateObjects

import Firestore from "../../firebaseCP/firestore.js";
 */

// Import Firestore from the firebaseCP directory

/**
 * Middleware function to attach Firestore instance to request object for accessing user data.
 *
 * @param {Object} req - Express request object.
 * @param {Object} _ - Express response object (unused in this function).
 * @param {Function} next - Express next function.
 */
const extraDetailsInitiateObjects = (req, _, next) => {
  // Create a new Firestore instance with the "users" collection and the user's uid
  // Attach this instance to the request object
  req.firestore = new Firestore("users", req.uid);

  // Call the next middleware function
  next();
};

// Export the middleware function
export default extraDetailsInitiateObjects;
