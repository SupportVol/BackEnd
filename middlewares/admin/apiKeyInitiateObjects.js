import ApiKey from '../../models/authentication/ApiKeyModel.js'
import isAuthorized from '../../utils/validation/isAuthorized.js'
const apiKeyInitiateObjects = (req, res, next) => {
  // Check if the user is authorized
  const response = isAuthorized(req.uid, ['Admin'], [0])
  if (Array.isArray(response)) {
    return res.json({ response })
  }
  const { ownerName, ownerUid, ownerEmail, ownerApiKey } = req.body
  // Create a new Ban object and add it to the request object
  req.apiInstance = new ApiKey(ownerName, ownerUid, ownerEmail, ownerApiKey)
  req.all = req.body.all ?? true
  // Call the next middleware
  next()
}

// Export the middleware
export default apiKeyInitiateObjects
