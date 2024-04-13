/**
 * Retrieves project data and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with project data.
 */
const readProject = (req, res) => {
  const { projectInitialization } = req;
  return res.json({
    response: projectInitialization.read(),
  });
};

/**
 * Creates a project and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with project creation status.
 */
const createProject = (req, res) => {
  const { projectInitialization } = req;
  return res.json({
    response: projectInitialization.create(),
  });
};

/**
 * Updates a project and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with project update status.
 */
const updateProject = (req, res) => {
  const { projectInitialization } = req;
  return res.json({
    response: projectInitialization.update(),
  });
};

/**
 * Deletes a project and sends a status response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - Response status.
 */
const deleteProject = (req, res) => {
  const { projectInitialization } = req;
  return res.json({
    response: projectInitialization.delete(),
  });
};

export { readProject, createProject, updateProject, deleteProject };
