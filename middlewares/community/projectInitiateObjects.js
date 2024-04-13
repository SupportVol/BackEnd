import Project from "../../models/community/ProjectModel.js";
// Importing the Project model

/**
 * Middleware to initiate a project object
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
const projectInitiateObjects = async (req, res, next) => {
  // Check if the user is authorized
  const allowed = await isAuthorized(
    req.uid,
    ["Admin", "Organization"],
    [0, 1],
    req
  );

  // If the user is not authorized, return the error message
  if (Array.isArray(allowed)) {
    return allowed[0];
  }

  // Destructure the project details from the request body
  const {
    name,
    organizations,
    volunteers,
    started_date,
    expected_completing_date,
    initiated_organization,
    description,
  } = req.body;

  // Create a new project object and attach it to the request object
  req.projectInitialization = new Project({
    name,
    organizations,
    volunteers,
    started_date,
    expected_completing_date,
    initiated_organization,
    description,
  });

  // Proceed to the next middleware
  next();
};

// Export the middleware
export default projectInitiateObjects;
