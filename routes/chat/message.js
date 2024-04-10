import { Router } from "express";
import extractUidAndVerification from "../../middlewares/extractUidAndVerification.js";
import messageInitiateObjects from "../../middlewares/chat/messageInitiateObjects.js";

const msgRouter = Router();

// Middleware for handling common functionality
msgRouter.use(extractUidAndVerification, messageInitiateObjects);

// Route for reading all messages
msgRouter.get("/", (req, res) => {
  const [response, msg] = req.msgInstance.readAllMessages();
  res.json({
    status: response ? 200 : 500,
    return: msg,
  });
});

// Route for creating a message
msgRouter.post("/", async (req, res) => {
  const [response, msg] = await req.msgInstance.createMessage(
    req.headers.message,
    req.uid
  );
  res.json({
    status: response ? 200 : 500,
    return: msg,
  });
});

// Route for deleting a message
msgRouter.delete("/", (req, res) => {
  const [response, msg] = req.msgInstance.deleteMessage(req.headers.messageID);
  res.json({
    status: response ? 200 : 500,
    return: msg,
  });
});

export default msgRouter;
