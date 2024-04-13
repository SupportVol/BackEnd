// Importing required modules
import Message from "../../models/communication/MessageModel.js";
import isAuthorized from "../../utils/validation/isAuthorized.js";

/**
 * Middleware function to initialize a Message instance for handling chat messages.
 * @param {Object} req - The request object. It should contain 'groupid', 'message' in its body and 'uid' in its properties.
 * @param {Object} res - The response object. Not used in this middleware.
 * @param {Function} next - The next middleware function.
 */
const messageInitiateObjects = (req, res, next) => {
  // Destructuring required properties from request body
  const { groupid, message } = req.body;

  // Uncomment the following line if authorization is required
  // isAuthorized(req.uid, ["Volunteer"], [], req);

  // Initializing a new Message instance and attaching it to the request object
  req.msgInstance = new Message(groupid, message, req.uid);

  // Calling the next middleware function
  next();
};

// Exporting the middleware function
export default messageInitiateObjects;
