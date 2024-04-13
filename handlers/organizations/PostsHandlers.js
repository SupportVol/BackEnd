/**
 * Retrieves post data and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with post data.
 */
const readPost = (req, res) => {
  const { postInitialization } = req;
  return res.json({
    response: postInitialization.read(),
  });
};

/**
 * Creates a post and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with post creation status.
 */
const createPost = (req, res) => {
  const { postInitialization } = req;
  return res.json({
    response: postInitialization.create(),
  });
};

/**
 * Updates a post and sends a status response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - Response status.
 */
const updatePost = (req, res) => {
  const { postInitialization } = req;
  return res.json({
    response: postInitialization.update(),
  });
};

/**
 * Deletes a post and sends a status response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - Response status.
 */
const deletePost = (req, res) => {
  const { postInitialization } = req;
  return res.json({
    response: postInitialization.delete(),
  });
};

export { readPost, createPost, updatePost, deletePost };
