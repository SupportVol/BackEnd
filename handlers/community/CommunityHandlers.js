/**
 * Retrieves community data and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with community data.
 */
const readCommunity = (req, res) => {
  const { response, commInstance } = req;
  return response.respondJSON(commInstance.read);
};

/**
 * Creates a community and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with community creation status.
 */
const createCommunity = (req, res) => {
  const { response, commInstance } = req;
  return response.respondJSON(commInstance.create);
};

/**
 * Updates a community and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with community update status.
 */
const updateCommunity = (req, res) => {
  const { response, commInstance } = req;
  return response.respondJSON(commInstance.update);
};

/**
 * Deletes a community and sends a status response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - Response status.
 */
const deleteCommunity = (req, res) => {
  const { response, commInstance } = req;
  return response.respondStatus(commInstance.delete);
};

export { readCommunity, createCommunity, updateCommunity, deleteCommunity };
