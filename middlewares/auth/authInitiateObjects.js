import Auth from "../../models/authentication/AuthModel.js";
import isValidEmail from "../../utils/validation/isValidEmail.js";

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

  // If email or password is not provided, return a 400 status
  if (!email || !password) {
    req.responseStats(400);
    return;
  }

  // TODO: Validate email
  // if (!isValidEmail(email)) {
  //   return req.response.responseError("Invalid email", 401);
  // }
  // console.log(email, password);
  // Create an Auth object with the parameters and attach it to the request object
  req.auth = new Auth(email, password);

  // Proceed to the next middleware function
  next();
};

export default authInitiateObjects;
