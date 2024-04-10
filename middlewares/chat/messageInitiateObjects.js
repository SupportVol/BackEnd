import Message from "../../models/chat/message.js";
/**
 * Initializes a Message instance for handling chat messages.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
const messageInitiateObjects = (req, res, next) => {
  const { groupid } = req.headers;
  req.msgInstance = new Message(groupid);
  next();
};

export default messageInitiateObjects;
