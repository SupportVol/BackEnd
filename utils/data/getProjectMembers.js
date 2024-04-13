import Firestore from "../../firebaseCP/firestore.js";

const getProjectMembers = (projectID) => {
  const fs = Firestore("projects", projectID);
  const members = fs.read()["members"];
  return members;
};
export default getProjectMembers;
