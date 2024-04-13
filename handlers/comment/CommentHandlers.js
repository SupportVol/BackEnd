/**
 * Creates a comment and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with comment creation status.
 */
const createComment = (req, res) => {
  const { body, response, commentInitialization } = req;
  const { senderuid, commentTxt } = body;
  return response.respondJSON(commentInitialization.createComment, [
    senderuid,
    commentTxt,
  ]);
};

/**
 * Retrieves a comment and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with the comment data.
 */
const getComment = (req, res) => {
  const { response, commentInitialization } = req;
  return response.respondJSON(commentInitialization.readComment);
};

/**
 * Updates a comment and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with comment update status.
 */
const updateComment = (req, res) => {
  const { body, response, commentInitialization } = req;
  const { senderuid, commentTxt } = body;
  return response.respondJSON(commentInitialization.updateComment, [
    senderuid,
    commentTxt,
  ]);
};

/**
 * Deletes a comment and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with comment deletion status.
 */
const deleteComment = (req, res) => {
  const { response, commentInitialization } = req;
  return response.respondJSON(commentInitialization.deleteComment);
};

export { createComment, getComment, updateComment, deleteComment };
