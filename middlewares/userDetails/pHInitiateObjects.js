import { Authentication } from "../../firebaseCP/authentication.js";

/**
 * Middleware function to initialize authentication object.
 * @param {Object} req - The request object.
 * @param {Object} _ - The response object (unused).
 * @param {Function} next - The next middleware function.
 */
const initAuthentication = (req, _, next) => {
  req.auth = new Authentication();
  next();
};

export default initAuthentication;
