/**
 * Gets the ban status of a user.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response containing the user's ban status.
 */
const getBanStatus = (req, res) => {
  const { response, ban } = req;
  return response.respondJSON(ban.isUserBanned);
};

/**
 * Bans a user and sends a JSON response with a message.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with a ban message.
 */
const banUser = (req, res) => {
  const { response, ban, uid } = req;
  return response.respondJSONandMessage(
    ban.banUser,
    `Banned User with Uid : ${uid}`
  );
};

/**
 * Unbans a user and sends a JSON response with a message.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with an unban message.
 */
const unBanUser = (req, res) => {
  const { response, ban, uid } = req;
  return response.respondJSONandMessage(
    ban.unBanUser,
    `Unbanned User with Uid : ${uid}`
  );
};

export { getBanStatus, banUser, unBanUser };
