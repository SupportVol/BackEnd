import { Authentication } from "../../firebaseCP/authentication.js";
const pHInitiateObjects = (req, _, next) => {
  req.auth = new Authentication();
  next();
};

export default pHInitiateObjects;
