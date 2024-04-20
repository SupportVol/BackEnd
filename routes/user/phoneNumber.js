// Importing necessary modules
import extractUidAndVerification from '../../middlewares/extractUidAndVerification.js'
import pHInitiateObjects from '../../middlewares/userDetails/phoneNumberInitiateObjects.js'
import {
  getPhoneNumber,
  updatePhoneNumber,
  deletePhoneNumber
} from '../../handlers/user/PhoneNumberHandlers.js'
import { Router } from 'express'
/**
 * userDetailsRouter class extends the BaseRouter class.
 * It initializes the routes for user details.
 */

const phoneNumberRouter = Router()
phoneNumberRouter.use(extractUidAndVerification)
// Use the pHInitiateObjects middleware
phoneNumberRouter.use(pHInitiateObjects)

// Define the GET, POST, and DELETE methods for the "/" route
phoneNumberRouter
  .route('/')
  .get(getPhoneNumber)
  .post(updatePhoneNumber)
  .delete(deletePhoneNumber)

export default phoneNumberRouter
