import Firestore from "../../firebaseCP/firestore.js";
import { isAuthorized } from "../../utils/isAuthorized";
import Group from "../../models/chat/group.js";

const grpInitiateObjects = async (req, res, next) => {
  try {
    console.log(req.method);
    req.groupID = req.headers.groupid;

    const fs = new Firestore();
    const allowed = await isAuthorized(req.uid);

    const grps = await fs.readGroup();
    if (!grps.includes(req.groupID))
      return res
        .status(404)
        .json({ status: 404, message: "The group ID is invalid" });

    if (!allowed && req.method !== "GET")
      return res.status(404).json({
        status: 404,
        message: "You do not have permission to create a group",
      });

    req.grpInstance = new Group(req.uid, req.groupID);
    next();
  } catch (error) {
    console.error("Error in grpInitiateObjects:", error);
    res.status(500).json({ status: 500, message: "Internal Server Error" });
  }
};
export default grpInitiateObjects;
