import { Authentication } from "../../firebaseCP/authentication.js";

const phoneAuthInitiateObjects = (req, _, next) => {
  req.auth = Authentication();
  next();
};

export default phoneAuthInitiateObjects;
