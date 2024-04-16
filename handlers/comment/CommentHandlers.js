/**
 * Creates a comment and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with comment creation status.
 */
const createComment = async (req, res) => {
  const { body, commentInitialization } = req;
  const { senderuid, commentTxt } = body;
  return res.json({
    response: await commentInitialization.create(senderuid, commentTxt),
  });
};

/**
 * Retrieves a comment and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with the comment data.
 */
const getComment = async (req, res) => {
  const { commentInitialization } = req;
  return res.json({
    response: await commentInitialization.read(),
  });
};

/**
 * Updates a comment and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with comment update status.
 */
const updateComment = async (req, res) => {
  const { body, commentInitialization } = req;
  const { senderuid, commentTxt } = body;
  return res.json({
    response: await commentInitialization.update(senderuid, commentTxt),
  });
};

/**
 * Deletes a comment and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with comment deletion status.
 */
const deleteComment = async (req, res) => {
  const { commentInitialization } = req;
  return res.json({
    response: await commentInitialization.delete(),
  });
};

export { createComment, getComment, updateComment, deleteComment };
