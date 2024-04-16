import Initiative from "../../models/community/InitiativeModel.js";
import isAuthorized from "../../utils/validation/isAuthorized.js";

/**
 * Middleware to initiate the creation of an Initiative object based on request body.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 * @returns {void}
 */
const iInitiateObjects = async (req, res, next) => {
  // Check if the user is authorized
  const allowed = await isAuthorized(
    req.uid,
    ["Admin", "Organization"],
    [0, 1],
    req
  );

  // If the user is not authorized, return the error message
  if (Array.isArray(allowed)) {
    return res.status(403).json({ error: allowed[0] });
  }

  // Destructure the request body
  const {
    name,
    organizations,
    volunteers,
    started_date,
    expected_completing_date,
    initiated_organization,
    slogun,
    mission,
    objectives,
    introductory_video_URL,
    projects,
    communityUID,
    initiativeUID
  } = req.body;

  // Create a new Initiative object and attach it to the request object
  req.iInstance = new Initiative(
    name,
    organizations,
    volunteers,
    started_date,
    expected_completing_date,
    initiated_organization,
    slogun,
    mission,
    objectives,
    introductory_video_URL,
    projects,
    communityUID,
    initiativeUID
  );

  // Proceed to the next middleware
  next();
};

export default iInitiateObjects;
