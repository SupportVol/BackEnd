// Importing necessary modules
import extractUidAndVerification from '../../../middlewares/extractUidAndVerification.js'
import projectInitiateObjects from '../../../middlewares/community/projectInitiateObjects.js'
import { Router } from 'express'
import {
  readProject,
  createProject,
  updateProject,
  deleteProject
} from '../../../handlers/community/projects/ProjectHandlers.js'

/**
 * projectRouter class extends BaseRouter to manage project related routes
 */
const projectRouter = Router()
// Middleware for extracting UID and verification
projectRouter.use(extractUidAndVerification, projectInitiateObjects)

// Route for reading a project
projectRouter.get('/', readProject)

// Route for creating a project
projectRouter.post('/', createProject)

// Route for updating a project
projectRouter.put('/', updateProject)

// Route for deleting a project
projectRouter.delete('/', deleteProject)

// Exporting the projectRouter class
export default projectRouter
