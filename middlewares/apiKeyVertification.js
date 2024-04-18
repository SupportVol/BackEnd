import Firestore from "../firebaseCP/firestore.js";

const apiKeyVerification = (req, res, next) => {
  req.apiKey = req.headers.apiKey;
  const fs = new Firestore("keys", req.apiKey);
  const [success, response] = fs.read();
  if (!success || response.uid === req.uid) {
    return res.status(401).json({ response, message: "Unauthorized" });
  }
  next();
};
export default apiKeyVerification;
