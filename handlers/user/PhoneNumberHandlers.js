/**
 * Retrieves the phone number for the current user and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with the user's phone number.
 */
const getPhoneNumber = (req, res) => {
  const { auth, uid } = req;
  return res.json({
    response: auth.getUser(uid),
  });
};

/**
 * Updates the phone number for the current user and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with the updated phone number status.
 */
const updatePhoneNumber = (req, res) => {
  const { body, auth, uid } = req;
  const { phonenumber } = body;
  return res.json({
    response: auth.getUser(uid, { phoneNumber: phonenumber }),
  });
};

/**
 * Deletes the phone number for the current user and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with the phone number deletion status.
 */
const deletePhoneNumber = (req, res) => {
  const { auth, uid } = req;
  return res.json({
    response: auth.deleteUser(uid),
  });
};

export { getPhoneNumber, updatePhoneNumber, deletePhoneNumber };
