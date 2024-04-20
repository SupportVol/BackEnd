/**
 * Retrieves project data and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with project data.
 */
const readProject = async (req, res) => {
  const { projectInitialization } = req
  return res.json({
    response: await projectInitialization.read()
  })
}

/**
 * Creates a project and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with project creation status.
 */
const createProject = async (req, res) => {
  const { projectInitialization } = req
  return res.json({
    response: await projectInitialization.create()
  })
}

/**
 * Updates a project and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with project update status.
 */
const updateProject = async (req, res) => {
  const { projectInitialization } = req
  return res.json({
    response: await projectInitialization.update()
  })
}

/**
 * Deletes a project and sends a status response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - Response status.
 */
const deleteProject = async (req, res) => {
  const { projectInitialization } = req
  return res.json({
    response: await projectInitialization.delete()
  })
}

export { readProject, createProject, updateProject, deleteProject }
