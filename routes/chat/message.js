import { Router } from "express";
import extractUidAndVerification from "../../middlewares/extractUidAndVerification.js";
import messageInitiateObjects from "../../middlewares/chat/messageInitiateObjects.js";

const msgRouter = Router();

msgRouter
  .route("/")
  .get(extractUidAndVerification, messageInitiateObjects, (req, res) => {
    const [response, msg] = req.msgInstance.readAllMessages();
    res.json({
      status: response ? 200 : 500,
      return: msg,
    });
  })
  .post(extractUidAndVerification, messageInitiateObjects, (req, res) => {
    const [response, msg] = req.msgInstance.createMessage(
      req.headers.message,
      req.uid
    );
    res.json({
      status: response ? 200 : 500,
      return: msg,
    });
  })
  .delete(extractUidAndVerification, messageInitiateObjects, (req, res) => {
    const [response, msg] = req.msgInstance.deleteMessage(
      req.headers.messageID
    );
    res.json({
      status: response ? 200 : 500,
      return: msg,
    });
  });

export default msgRouter;
