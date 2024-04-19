import Ban from '../../models/authentication/BanModel.js'
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
  // Create a new instance of Ban
  const ban = new Ban(req.uid)
  const isBanned = await ban.isUserBanned()

  // If the user is banned, send a 403 response
  if (isBanned) {
    return res.status(403).send('You are banned from accessing this resource.')
  }

  // If the user is not banned, call the next middleware function
  next()
}

export default checkBanStatus
