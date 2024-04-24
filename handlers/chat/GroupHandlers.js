/**
 * Retrieves group data and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with group data.
 */
const getGroup = async (req, res) => {
  const { response, grpInstance } = req
  return await res.json({ response: await grpInstance.read() })
}

/**
 * Creates a group and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with group creation status.
 */
const createGroup = async (req, res) => {
  const { grpInstance } = req
  return res.json({
    response: await grpInstance.create()
  })
}

/**
 * Updates a group and sends a status response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - Response status.
 */
const updateGroup = async (req, res) => {
  const { grpInstance } = req
  return res.json({
    response: await grpInstance.update()
  })
}

/**
 * Deletes a group and sends a status response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - Response status.
 */
const deleteGroup = async (req, res) => {
  const { grpInstance } = req
  return res.json({
    response: await grpInstance.delete()
  })
}

export { getGroup, createGroup, updateGroup, deleteGroup }
