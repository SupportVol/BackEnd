/**
 * Retrieves the phone number for the current user and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with the user's phone number.
 */
const getPhoneNumber = (req, res) => {
  const { auth } = req;
  return res.json({
    response: auth.getUser(req.uid),
  });
};

/**
 * Updates the phone number for the current user and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with the updated phone number status.
 */
const updatePhoneNumber = async (req, res) => {
  const { body, auth } = req;
  const { phoneNumber } = body;
  const response = await auth.updateUser(req.uid, { phoneNumber: phoneNumber });
  return res.json({
    response,
  });
};

/**
 * Deletes the phone number for the current user and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with the phone number deletion status.
 */
const deletePhoneNumber = (req, res) => {
  const { auth } = req;
  return res.json({
    response: auth.deleteUser(req.uid),
  });
};

export { getPhoneNumber, updatePhoneNumber, deletePhoneNumber };
