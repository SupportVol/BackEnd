/**
 * Retrieves group data and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with group data.
 */
const getGroup = (req, res) => {
  const { response, grpInstance } = req;
  return response.respondJSON(grpInstance.read);
};

/**
 * Creates a group and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with group creation status.
 */
const createGroup = (req, res) => {
  const { response, grpInstance } = req;
  return response.respondJSON(grpInstance.create);
};

/**
 * Updates a group and sends a status response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - Response status.
 */
const updateGroup = (req, res) => {
  const { response, grpInstance } = req;
  return response.respondStatus(grpInstance.update);
};

/**
 * Deletes a group and sends a status response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - Response status.
 */
const deleteGroup = (req, res) => {
  const { response, grpInstance } = req;
  return response.respondStatus(grpInstance.deleteGroup);
};

export { getGroup, createGroup, updateGroup, deleteGroup };
