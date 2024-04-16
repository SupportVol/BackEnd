import Comment from "../../models/communication/CommentModel.js";
/**
 * Middleware function to initialize specific comment objects.
 * It extracts the id and message from the request body, and commentID from the request parameters.
 * Then, it creates a new Comment instance and attaches it to the request object.
 * Finally, it calls the next middleware in the stack.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
const specificCommentInitiateObjects = (req, res, next) => {
  // Destructure id and message from request body
  const { id, comment, commentID } = req.body;

  // Attach the Comment instance to the request object
  req.commentInitialization =  new Comment(id, commentID, req.uid, comment);

  // Call the next middleware function
  next();
};

export default specificCommentInitiateObjects;
