/**
 * Middleware function to initiate community objects.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Next middleware function.
 * @returns {void}
 */

import Community from '../../models/community/CommunityModel.js'
import isAuthorized from '../../utils/validation/isAuthorized.js'
/**
 * Initiate community objects and attach them to the request object.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Next middleware function.
 * @returns {void} - Returns nothing.
 */
const initiateCommunityObjects = async (req, res, next) => {
  try {
    // Check if the user is authorized
    const allowed = await isAuthorized(req.uid, ['Admin'], [0, 1], req)

    // Attach community UID to the request object
    req.communityUID = req.body.communityuid

    // If the user is not authorized and the request method is not GET, return the error message
    if (Array.isArray(allowed) && req.method !== 'POST') {
      return res.status(403).json({ status: 403, message: allowed[0] })
    }
    const {
      communityUID,
      name,
      title,
      description,
      photoUrl,
      banner,
      theme,
      members
    } = req.body
    // Create a new community instance and attach it to the request object
    req.commInstance = new Community(
      communityUID,
      name,
      title,
      description,
      photoUrl,
      banner,
      theme,
      members
    )
    // Proceed to the next middleware
    next()
  } catch (error) {
    // If an error occurs, return a 500 status code with an error message
    return res.status(500).json({
      message: error.message
    })
  }
}

export default initiateCommunityObjects
