import Message from "../../models/chat/message.js";
const messageInitiateObjects = (req, _, next) => {
  const { groupid } = req.headers;
  req.msgInstance = new Message(groupid);
  next();
};
export default messageInitiateObjects;
