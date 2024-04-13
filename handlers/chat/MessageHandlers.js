/**
 * Retrieves all messages and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with all messages.
 */
const getAllMessages = (req, res) => {
  const { msgInstance } = req;
  return res.json({
    response: msgInstance.readAllMessages(),
  });
};

/**
 * Creates a message and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with message creation status.
 */
const createMessage = (req, res) => {
  const { msgInstance } = req;
  return res.json({
    response: msgInstance.createMessage(),
  });
};

/**
 * Deletes a message and sends a status response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - Response status.
 */
const deleteMessage = (req, res) => {
  const { msgInstance } = req;
  const response = msgInstance.deleteMessage();
  return res.status(response[0] ? 200 : 500);
};

export { getAllMessages, createMessage, deleteMessage };
