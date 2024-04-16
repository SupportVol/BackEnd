/**
 * Gets the ban status of a user.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response containing the user's ban status.
 */
const getBanStatus = async (req, res) => {
  const { ban } = req;
  return res.json({
    response: await ban.isUserBanned(),
  });
};

/**
 * Bans a user and sends a JSON response with a message.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with a ban message.
 */
const banUser = (req, res) => {
  const { ban, uid } = req;
  return res
    .send(`Banned User with Uid : ${req.body.banUID}`)
    .json({ response: ban.banUser() });
};

/**
 * Unbans a user and sends a JSON response with a message.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with an unban message.
 */
const unBanUser = (req, res) => {
  const { ban, uid } = req;
  return res
    .send(`Unbanned User with Uid : ${req.body.banUID}`)
    .json({ response: ban.unBanUser() });
};

export { getBanStatus, banUser, unBanUser };
