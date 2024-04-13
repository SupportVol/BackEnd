import News from "../../models/content/NewsModel.js";
import isAuthorized from "../../utils/validation/isAuthorized.js";

/**
 * Middleware to initialize news objects.
 *
 * @param {Object} req - The request object.
 * @param {Object} _ - The response object (not used).
 * @param {Function} next - The next middleware function.
 *
 * @returns {void}
 */
const newsInitiateObjects = (req, _, next) => {
  // Check if the user is authorized
  const allowedResponse = isAuthorized(req.uid, ["Admin"], [1, 0], req);

  // If the response is an array, return the first element
  if (Array.isArray(allowedResponse)) {
    return allowedResponse[0];
  }

  // Destructure the request body
  const { title, description, tags, orgID, senderUID, newsID } = req.body;

  // Initialize the news object
  req.newsInitialization = new News(
    title,
    description,
    tags,
    senderUID,
    orgID,
    newsID
  );

  // Check if all required fields are present
  if (!title || !description || !tags || !orgID || !senderUID || !newsID) {
    return req.responseStatus(400);
  }

  // Proceed to the next middleware
  next();
};

export default newsInitiateObjects;
