/**
 * Retrieves all messages and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with all messages.
 */
const getAllMessages = async (req, res) => {
  const { msgInstance } = req;
  return res.json({
    response: await msgInstance.read(),
  });
};

/**
 * Creates a message and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with message creation status.
 */
const createMessage = async (req, res) => {
  const { msgInstance } = req;
  return res.json({
    response: await msgInstance.create(),
  });
};

/**
 * Deletes a message and sends a status response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - Response status.
 */
const deleteMessage = async (req, res) => {
  const { msgInstance } = req;
  const response = await msgInstance.delete();
  return res.json(response);
};

export { getAllMessages, createMessage, deleteMessage };
