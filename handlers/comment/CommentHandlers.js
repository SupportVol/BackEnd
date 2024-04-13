/**
 * Creates a comment and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with comment creation status.
 */
const createComment = (req, res) => {
  const { body, commentInitialization } = req;
  const { senderuid, commentTxt } = body;
  return res.json({
    response: commentInitialization.createComment(senderuid, commentTxt),
  });
};

/**
 * Retrieves a comment and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with the comment data.
 */
const getComment = (req, res) => {
  const { commentInitialization } = req;
  return res.json({
    response: commentInitialization.readComment(),
  });
};

/**
 * Updates a comment and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with comment update status.
 */
const updateComment = (req, res) => {
  const { body, commentInitialization } = req;
  const { senderuid, commentTxt } = body;
  return res.json({
    response: commentInitialization.updateComment(senderuid, commentTxt),
  });
};

/**
 * Deletes a comment and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with comment deletion status.
 */
const deleteComment = (req, res) => {
  const { commentInitialization } = req;
  return res.json({
    response: commentInitialization.deleteComment(),
  });
};

export { createComment, getComment, updateComment, deleteComment };
