/**
 * Middleware to initialize Quick Project instance.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 */
import QuickProject from "../../models/community/quick_projects/quick_project.js";

const qpInitiateObjects = (req, res, next) => {
  const {
    quickProjectID,
    communityID,
    eventID,
    orgId,
    title,
    description,
    start_date,
    end_date,
    term,
    members,
  } = req.body;

  const qpData = {
    quickProjectID,
    communityID,
    eventID,
    orgId,
    title,
    description,
    start_date,
    end_date,
    term,
    members,
  };

  req.qpInstance = new QuickProject(qpData);
  next();
};

export default qpInitiateObjects;
