import Message from "../../models/chat/message.js";
const messageInitiateObjects = (req, _, next) => {
  const { groupID } = req.headers;
  req.msgInstance = new Message(groupID);
  next();
};
export default messageInitiateObjects;
