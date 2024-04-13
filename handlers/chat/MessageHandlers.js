/**
 * Retrieves all messages and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with all messages.
 */
const getAllMessages = (req, res) => {
  const { response, msgInstance } = req;
  return response.respondJSON(msgInstance.readAllMessages);
};

/**
 * Creates a message and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with message creation status.
 */
const createMessage = (req, res) => {
  const { response, msgInstance } = req;
  return response.respondJSON(msgInstance.createMessage);
};

/**
 * Deletes a message and sends a status response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - Response status.
 */
const deleteMessage = (req, res) => {
  const { response, msgInstance } = req;
  return response.respondStatus(msgInstance.deleteMessage);
};

export { getAllMessages, createMessage, deleteMessage };
