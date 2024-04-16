/**
 * Retrieves the profile picture URL for the current user and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with the user's profile picture URL.
 */
const getProfilePicture = (req, res) => {
  const { storage, uid } = req;
  return res.json({
    response: storage.getDownloadURL(`pfp/${uid}`),
  });
};

/**
 * Uploads a new profile picture for the current user and updates the user's photo URL in the database.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with the updated profile picture URL status.
 */
const uploadProfilePicture = (req, res) => {
  const { body, storage, auth, uid } = req;
  let { imageBase64, reqUrl } = body;

  if (imageBase64) {
    const response = storage.uploadByte8Array(`pfp/${uid}`, imageBase64);
    reqUrl = response[response.length - 1];
  }
  return res.json({
    response: auth.updateUser(uid, { photoUrl: reqUrl }),
  });
};

/**
 * Deletes the profile picture for the current user and updates the user's photo URL in the database to NaN.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with the profile picture deletion status.
 */
const deleteProfilePicture = (req, res) => {
  const { storage, auth, uid } = req;
  storage.deleteFile(`pfp/${uid}`);
  return res.json({
    response: auth.updateUser(uid, { photoUrl: NaN }),
  });
};

export { getProfilePicture, uploadProfilePicture, deleteProfilePicture };
