/**
 * Middleware function to initiate community objects.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Next middleware function.
 * @returns {void}
 */
import Community from "../../models/community/community.js";
import isAuthorized from "../../utils/isAuthorized.js";

const initiateCommunityObjects = async (req, res, next) => {
  try {
    const allowed = await isAuthorized(req.uid);
    req.communityUID = req.body.communityuid;

    if (!allowed && req.method !== "GET") {
      return res.status(404).json({
        status: 404,
        message:
          "You do not have permission to create, update, or delete a community",
      });
    }

    req.commInstance = new Community(req.uid, req.communityUID);
    next();
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Internal server error",
    });
  }
};

export default initiateCommunityObjects;
