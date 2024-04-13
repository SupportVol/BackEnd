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
  const { id, message } = req.body;

  // Destructure commentID from request parameters
  const { commentID } = req.params;

  // Create a new Comment instance
  const comment = new Comment(id, commentID, req.uid, message);

  // Attach the Comment instance to the request object
  req.commentInitialization = comment;

  // Call the next middleware function
  next();
};

export default specificCommentInitiateObjects;
