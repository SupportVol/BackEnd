/**
 * Middleware function to attach Firestore instance to request object for accessing user data.
 * @param {Object} req - Express request object.
 * @param {Object} _ - Express response object.
 * @param {Function} next - Express next function.
 */
import Firestore from "../../firebaseCP/firestore.js";

const extraDetailsInitiateObjects = (req, _, next) => {
  req.firestore = new Firestore("users", req.uid);
  next();
};

export default extraDetailsInitiateObjects;
