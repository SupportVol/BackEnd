/**
 * Middleware function to initialize group-related objects for further processing.
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @param {function} next - The next function in the middleware chain.
 * @returns {void|object} - Returns nothing if successful, or an error object if an error occurs.
 */

import Firestore from '../../firebaseCP/firestore.js'
import isAuthorized from '../../utils/validation/isAuthorized.js'
import Group from '../../models/communication/GroupModel.js'
const grpInitiateObjects = async (req, res, next) => {
  // Check if the user is authorized
  const allowedResponse = isAuthorized(req.uid, ['Organization'], [], req)

  // If the user is not authorized and the request method is not GET, return the first error message
  if (Array.isArray(allowedResponse) && req.method !== 'GET') {
    return allowedResponse[0]
  }

  const { members, name, description, projectID, groupID } = req.body

  // Initialize Firestore instance with 'groups' collection
  const fs = new Firestore('chatGroups')

  // Read existing groups from Firestore
  const allRecords = await fs.readAll()
  const existingGroups = Object.keys(allRecords[1])
  // If the requested group ID does not exist, return an error
  if (!existingGroups.includes(groupID) && req.method !== 'POST') {
    return res.json({ response: ['The group ID is invalid', 404] })
  }

  // Initialize Group instance with the user ID and group ID
  req.grpInstance = new Group(members, name, description, projectID, groupID)

  // Move to the next middleware function
  next()
}

export default grpInitiateObjects
