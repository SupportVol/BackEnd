import Storage from "../../firebaseCP/storage.js";
import { Authentication } from "../../firebaseCP/authentication.js";
const pfpInitiateObjects = (req, _, next) => {
  req.storage = new Storage();
  req.auth = new Authentication();
  req.path = `pfp/${req.uid}`;
  next();
};

export default pfpInitiateObjects;
