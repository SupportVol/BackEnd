// Importing the Post model
import Post from "../../models/content/PostsModel.js";

/**
 * Middleware function to initiate a new Post object.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
const postInitiateObjects = (req, res, next) => {
  // Destructuring the required fields from the request body
  const { title,
    description,
    tags,
    orgID,
    senderUID,
    postID } = req.body;

  // Creating a new Post object and attaching it to the request object
  req.postInitialization = new Post(
    title,
    description,
    tags,
    orgID,
    senderUID,
    postID
  );

  // Proceeding to the next middleware function
  next();
};

// Exporting the middleware function
export default postInitiateObjects;
