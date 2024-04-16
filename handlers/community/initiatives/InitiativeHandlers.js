/**
 * Retrieves all initiatives and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with all initiatives.
 */
const readAllInitiatives = async (req, res) => {
  const { iInstance } = req;
  return res.json({
    response: await iInstance.readAll(),
  });
};

/**
 * Creates an initiative and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with initiative creation status.
 */
const createInitiative = async (req, res) => {
  const { iInstance } = req;
  return res.json({
    response: await iInstance.create(),
  });
};

/**
 * Updates an initiative and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with initiative update status.
 */
const updateInitiative = async (req, res) => {
  const { iInstance } = req;
  return res.json({
    response: await iInstance.update(),
  });
};

/**
 * Deletes an initiative and sends a status response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - Response status.
 */
const deleteInitiative = async (req, res) => {
  const { iInstance } = req;
  return res.json({
    response: await iInstance.delete(),
  });
};

export {
  readAllInitiatives,
  createInitiative,
  updateInitiative,
  deleteInitiative,
};
