import Auth from "../../models/auth.js";

/**
 * Middleware to initialize Auth objects based on request URL.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next function.
 */
const authInitiateObjects = (req, res, next) => {
  const { email, password, name } = req.headers;
  const authParams = { email, password };

  // Add name parameter if URL is "/signup"
  if (req.url === "/signup") {
    authParams.name = name;
  }

  // Create Auth object with the parameters
  req.auth = new Auth(...Object.values(authParams));
  next();
};

export default authInitiateObjects;
