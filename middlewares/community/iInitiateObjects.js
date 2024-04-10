import Initiative from "../../models/community/initiatives/initiative.js";

/**
 * Initiates the creation of an Initiative object based on request headers.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
const iInitiateObjects = (req, res, next) => {
  // Destructuring request headers
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
  } = req.headers;

  // Creating a new Initiative object
  req.qpInstance = new Initiative(
    quickProjectID,
    communityID,
    eventID,
    orgId,
    title,
    description,
    start_date || Date(), // Use current date if start_date is not provided
    end_date,
    term,
    members
  );

  // Proceed to the next middleware
  next();
};

export default iInitiateObjects;
