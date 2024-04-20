// Importing necessary modules
import extractUidAndVerification from '../../../middlewares/extractUidAndVerification.js'
import iInitiateObjects from '../../../middlewares/community/initiativeInitiateObjects.js'
import { Router } from 'express'
import {
  readAllInitiatives,
  createInitiative,
  updateInitiative,
  deleteInitiative
} from '../../../handlers/community/initiatives/InitiativeHandlers.js'
// iRouter class extends BaseRouter
const iRouter = Router()
// Middleware for extracting UID and verification, and initiating objects
iRouter.use(extractUidAndVerification, iInitiateObjects)

// Route for reading all initiatives
iRouter.get('/', readAllInitiatives)

// Route for creating an initiative
iRouter.post('/', createInitiative)

// Route for updating an initiative
iRouter.put('/', updateInitiative)

// Route for deleting an initiative
iRouter.delete('/', deleteInitiative)

// Exporting iRouter as default
export default iRouter
