/**
 * Retrieves group data and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with group data.
 */
const getGroup = (req, started_date) => {
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
  const { grpInstance } = req;
  return res.json({
    response: grpInstance.create(),
  });
};

/**
 * Updates a group and sends a status response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - Response status.
 */
const updateGroup = (req, res) => {
  const { grpInstance } = req;
  return res.json({
    response: grpInstance.update(),
  });
};

/**
 * Deletes a group and sends a status response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - Response status.
 */
const deleteGroup = (req, res) => {
  const { grpInstance } = req;
  return res.json({
    response: grpInstance.deleteGroup(),
  });
};

export { getGroup, createGroup, updateGroup, deleteGroup };
