// Importing necessary modules
import extractUidAndVerification from "../../middlewares/extractUidAndVerification.js";
import pHInitiateObjects from "../../middlewares/userDetails/phoneNumberInitiateObjects.js";
import {
  getPhoneNumber,
  updatePhoneNumber,
  deletePhoneNumber,
} from "../../handlers/user/PhoneNumberHandlers.js";
import { Router } from "express";
/**
 * userDetailsRouter class extends the BaseRouter class.
 * It initializes the routes for user details.
 */

const userDetailsRouter = Router();
userDetailsRouter.use(extractUidAndVerification);
// Use the pHInitiateObjects middleware
userDetailsRouter.use(pHInitiateObjects);

// Define the GET, POST, and DELETE methods for the "/" route
userDetailsRouter
  .route("/")
  .get(getPhoneNumber)
  .post(updatePhoneNumber)
  .delete(deletePhoneNumber);

// Export the userDetailsRouter class
export default userDetailsRouter;
