import Community from "../../models/community/community.js";
import isAuthorized from "../../utils/isAuthorized.js";
const commInitiateObjects = async (req, res, next) => {
  const allowed = await isAuthorized(req.uid);
  req.communityUID = req.headers.communityuid;
  if (!allowed && req.method !== "GET")
    return res.status(404).json({
      status: 404,
      message:
        "You do not have permission to create or update or delete a community",
    });
  req.commInstance = new Community(req.uid, req.communityUID);
  next();
};
export default commInitiateObjects;
