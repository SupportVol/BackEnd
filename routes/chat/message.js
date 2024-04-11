import { Router } from "express";
import extractUidAndVerification from "../../middlewares/extractUidAndVerification.js";
import messageInitiateObjects from "../../middlewares/chat/messageInitiateObjects.js";

/**
 * Express router for managing chat messages.
 * @module routes/chat/message
 */

const msgRouter = Router();

/**
 * Middleware for handling common functionality.
 * @name Middleware
 * @function
 * @memberof module:routes/chat/message
 * @inner
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 * @param {function} next - Express next middleware function
 */
msgRouter.use(extractUidAndVerification, messageInitiateObjects);

/**
 * Route for reading all messages.
 * @name GET/api/chat/msg
 * @function
 * @memberof module:routes/chat/message
 * @inner
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 */
msgRouter.get("/", (req, res) => {
  const [response, msg] = req.msgInstance.readAllMessages();
  res.json({
    status: response ? 200 : 500,
    return: msg,
  });
});

/**
 * Route for creating a message.
 * @name POST/api/chat/msg
 * @function
 * @memberof module:routes/chat/message
 * @inner
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 */
msgRouter.post("/", async (req, res) => {
  const [response, msg] = await req.msgInstance.createMessage(
    req.body.message,
    req.uid
  );
  res.json({
    status: response ? 200 : 500,
    return: msg,
  });
});

/**
 * Route for deleting a message.
 * @name DELETE/api/chat/msg
 * @function
 * @memberof module:routes/chat/message
 * @inner
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 */
msgRouter.delete("/", (req, res) => {
  const [response, msg] = req.msgInstance.deleteMessage(req.body.messageID);
  res.json({
    status: response ? 200 : 500,
    return: msg,
  });
});

export default msgRouter;
