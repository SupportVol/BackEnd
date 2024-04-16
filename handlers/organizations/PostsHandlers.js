/**
 * Retrieves post data and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with post data.
 */
const readPost = async (req, res) => {
  const { postInitialization } = req;
  return res.json({
    response: await postInitialization.read(),
  });
};

/**
 * Creates a post and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with post creation status.
 */
const createPost = async (req, res) => {
  const { postInitialization } = req;
  return res.json({
    response:await  postInitialization.create(),
  });
};

/**
 * Updates a post and sends a status response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - Response status.
 */
const updatePost = async (req, res) => {
  const { postInitialization } = req;
  return res.json({
    response: await postInitialization.update(),
  });
};

/**
 * Deletes a post and sends a status response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - Response status.
 */
const deletePost = async (req, res) => {
  const { postInitialization } = req;
  return res.json({
    response: await postInitialization.delete(),
  });
};

export { readPost, createPost, updatePost, deletePost };
