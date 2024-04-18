import Auth from "../../models/authentication/AuthModel.js";
// import isValidEmail from "../../utils/validation/isValidEmail.js";

/**
 * Middleware function to initiate authentication objects.
 * It extracts email and password from the request body and creates an Auth object.
 * If the request URL is "/signup", it also adds a name parameter to the Auth object.
 * @param {Object} req - The request object.
 * @param {Object} _ - The response object (not used).
 * @param {Function} next - The next middleware function.
 */

const authInitiateObjects = (req, _, next) => {
  // Extract email and password from request body
  const { email, password } = req.body;

  // Create an Auth object with the parameters and attach it to the request object
  req.auth = new Auth(email, password);

  // Proceed to the next middleware function
  next();
};

export default authInitiateObjects;
