/**
 * Express router for managing group-related endpoints.
 * @module routers/groupRouter
 */
import extractUidAndVerification from '../../middlewares/extractUidAndVerification.js'
import grpInitiateObjects from '../../middlewares/chat/groupInitiateObjects.js'
import { Router } from 'express'
import {
  getGroup,
  createGroup,
  updateGroup,
  deleteGroup
} from '../../handlers/chat/GroupHandlers.js'
const grpRouter = Router()
// Middleware for extracting UID and verification
grpRouter.use(extractUidAndVerification)
// Middleware for initiating group objects
grpRouter.use(grpInitiateObjects)

// Route for getting group details
grpRouter.get('/', getGroup)
// Route for creating a new group
grpRouter.post('/', createGroup)
// Route for updating an existing group
grpRouter.put('/', updateGroup)
// Route for deleting a group
grpRouter.delete('/', deleteGroup)

export default grpRouter
