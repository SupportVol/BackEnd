/**
 * Initializes group-related objects for further processing.
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @param {function} next - The next function in the middleware chain.
 */
import Firestore from "../../firebaseCP/firestore.js";
import isAuthorized from "../../utils/isAuthorized.js";
import Group from "../../models/chat/group.js";

const grpInitiateObjects = async (req, res, next) => {
  try {
    // Extract group ID from request body
    req.groupID = req.body.groupid;

    // Initialize Firestore instance
    const fs = new Firestore();

    // Check if user is authorized
    const allowed = await isAuthorized(req.uid);

    // Read existing groups from Firestore
    const existingGroups = await fs.readGroup();

    // Check if the requested group ID exists
    if (!existingGroups.includes(req.groupID)) {
      return res
        .status(404)
        .json({ status: 404, message: "The group ID is invalid" });
    }

    // Check authorization for creating a group
    if (!allowed && req.method !== "GET") {
      return res.status(404).json({
        status: 404,
        message: "You do not have permission to create a group",
      });
    }

    // Initialize Group instance
    req.grpInstance = new Group(req.uid, req.groupID);

    // Move to the next middleware function
    next();
  } catch (error) {
    console.error("Error in grpInitiateObjects:", error);
    res.status(500).json({ status: 500, message: "Internal Server Error" });
  }
};

export default grpInitiateObjects;
