// Importing necessary modules
import { Router } from 'express'
import apiKeyInitiateObjects from '../../middlewares/admin/apiKeyInitiateObjects.js'
import {
  createApiKey,
  deleteApiKey,
  getApiKeys,
  updateApiKey
} from '../../handlers/admin/ApiKeyHandlers.js'

const apiKeyRouter = Router()
apiKeyRouter.use(apiKeyInitiateObjects)
apiKeyRouter
  .route('/')
  .get(getApiKeys)
  .post(createApiKey)
  .put(updateApiKey)
  .delete(deleteApiKey)
// Export banRouter class
export default apiKeyRouter
