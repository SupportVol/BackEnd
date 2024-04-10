import Firestore from "../firebaseCP/firestore.js";

const isAuthorized = async (uid) => {
  const authFS = new Firestore("users", uid);
  const userData = await authFS.read();
  return userData[1]["role"] === "Admin" || userData[1]["role"] === "org";
};
export default isAuthorized;
