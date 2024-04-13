/**
 * Retrieves project data and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with project data.
 */
const readProject = (req, res) => {
  const { response, projectInitialization } = req;
  return response.respondJSON(projectInitialization.read);
};

/**
 * Creates a project and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with project creation status.
 */
const createProject = (req, res) => {
  const { response, projectInitialization } = req;
  return response.respondJSON(projectInitialization.create);
};

/**
 * Updates a project and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with project update status.
 */
const updateProject = (req, res) => {
  const { response, projectInitialization } = req;
  return response.respondJSON(projectInitialization.update);
};

/**
 * Deletes a project and sends a status response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - Response status.
 */
const deleteProject = (req, res) => {
  const { response, projectInitialization } = req;
  return response.respondStatus(projectInitialization.delete);
};

export { readProject, createProject, updateProject, deleteProject };
