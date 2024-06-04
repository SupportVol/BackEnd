import randomImageGenerator from "../../utils/helper/randomImageGenerator.js";
/**
 * Retrieves the profile picture URL for the current user and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with the user's profile picture URL.
 */
const getProfilePicture = async (req, res) => {
  const { auth, storage, uid } = req;
  let url = NaN;
  url = await storage.getDownloadURL(`pfp/${uid}`);
  if (url[0] === false) {
    url = await auth.getUser(uid);
  }
  return res.json({
    response: url[1],
  });
};

/**
 * Uploads a new profile picture for the current user and updates the user's photo URL in the database.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with the updated profile picture URL status.
 */

const uploadProfilePicture = async (req, res) => {
  const { body, storage, auth, uid } = req;
  let { imageBase64, reqUrl } = body;
  if (imageBase64) {
    const response = storage.uploadByte8Array(path, imageBase64);
    reqUrl = response[response.length - 1];
  }
  reqUrl = await auth.updateUser(uid, { photoURL: reqUrl });
  return res.json({
    response: reqUrl[1].photoURL,
  });
};

/**
 * Deletes the profile picture for the current user and updates the user's photo URL in the database to NaN.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with the profile picture deletion status.
 */
const deleteProfilePicture = async (req, res) => {
  const { storage, auth, uid } = req;
  let del = NaN;
  del = await storage.deleteFile(`pfp/${uid}`);
  if (del[0] === false) {
    del = await auth.updateUser(uid, { photoURL: randomImageGenerator() });
  }
  // "https://www.pngfind.com/pngs/m/676-6764065_default-profile-picture-transparent-hd-png-download.png"
  return res.json({
    response: "User was Deleted",
  });
};

export { getProfilePicture, uploadProfilePicture, deleteProfilePicture };
randomImageGenerator;
