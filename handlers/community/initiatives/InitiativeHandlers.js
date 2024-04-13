/**
 * Retrieves all initiatives and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with all initiatives.
 */
const readAllInitiatives = (req, res) => {
  const { iInstance } = req;
  return res.json({
    response: iInstance.readIAll(),
  });
};

/**
 * Creates an initiative and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with initiative creation status.
 */
const createInitiative = (req, res) => {
  const { iInstance } = req;
  return res.json({
    response: iInstance.createI(),
  });
};

/**
 * Updates an initiative and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with initiative update status.
 */
const updateInitiative = (req, res) => {
  const { iInstance } = req;
  return res.json({
    response: iInstance.updateI(),
  });
};

/**
 * Deletes an initiative and sends a status response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - Response status.
 */
const deleteInitiative = (req, res) => {
  const { iInstance } = req;
  return res.json({
    response: iInstance.deleteI(),
  });
};

export {
  readAllInitiatives,
  createInitiative,
  updateInitiative,
  deleteInitiative,
};
