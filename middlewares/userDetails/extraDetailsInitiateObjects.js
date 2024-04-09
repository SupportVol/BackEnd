import Firestore from "../../firebaseCP/firestore.js";
const extraDetailsInitiateObjects = (req, _, next) => {
  req.firestore = new Firestore("users", req.uid);
  next();
};

export default extraDetailsInitiateObjects;
