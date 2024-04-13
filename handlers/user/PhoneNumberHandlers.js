/**
 * Retrieves the phone number for the current user and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with the user's phone number.
 */
const getPhoneNumber = (req, res) => {
  const { response, auth, uid } = req;
  return response.respondJSON(auth.getUser, [uid]);
};

/**
 * Updates the phone number for the current user and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with the updated phone number status.
 */
const updatePhoneNumber = (req, res) => {
  const { body, response, auth, uid } = req;
  const { phonenumber } = body;
  return response.respondJSON(auth.updateUser, [
    uid,
    { phoneNumber: phonenumber },
  ]);
};

/**
 * Deletes the phone number for the current user and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with the phone number deletion status.
 */
const deletePhoneNumber = (req, res) => {
  const { response, auth, uid } = req;
  return response.respondJSON(auth.deleteUser, [uid]);
};

export { getPhoneNumber, updatePhoneNumber, deletePhoneNumber };
