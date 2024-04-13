import Ban from "../../models/authentication/BanModel.js";
/**
 * Middleware function to check if a user is banned.
 * If the user is banned, it sends a 403 response with a message.
 * If the user is not banned, it calls the next middleware function in the stack.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
const checkBanStatus = async (req, res, next) => {
  // Assuming user ID is available in request
  const { uid } = req;

  // Create a new instance of Ban
  const ban = new Ban();

  // Check if the user is banned
  const isBanned = await ban.isUserBanned(uid);

  // If the user is banned, send a 403 response
  if (isBanned) {
    return res.status(403).send("You are banned from accessing this resource.");
  }

  // If the user is not banned, call the next middleware function
  next();
};

export default checkBanStatus;
