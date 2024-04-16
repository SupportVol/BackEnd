// Importing necessary modules
import Ban from "../../models/authentication/BanModel.js";
import isAuthorized from "../../utils/validation/isAuthorized.js";

/**
 * Middleware to initiate ban objects.
 * This middleware checks if the user is authorized and then creates a new Ban object.
 * It also sets up the response structure.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
const banInitiateObjects = (req, res, next) => {
  // Check if the user is authorized
  const response = isAuthorized(req.uid, ["Admin"], [1]);
  if (Array.isArray(response)) {
    return res.json({ response: response });
  }

  // Create a new Ban object and add it to the request object
  req.ban = new Ban(req.uid);

  // Set up the response structure
  req.resStructure = { res };

  // Call the next middleware
  next();
};

// Export the middleware
export default banInitiateObjects;
