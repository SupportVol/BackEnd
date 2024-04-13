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

  // Create an object with email and password
  const authParams = { email, password };

  // TODO: Validate email
  // if (!isValidEmail(email)) {
  //   return req.response.responseError("Invalid email", 401);
  // }

  // If the request URL is "/signup", add a name parameter
  if (req.url === "/signup") {
    authParams.name = req.body.name;
  }

  // Create an Auth object with the parameters and attach it to the request object
  req.auth = new Auth(authParams);

  // Proceed to the next middleware function
  next();
};

export default authInitiateObjects;
