// Importing necessary modules
import { Router } from "express";
import extractUidAndVerification from "../../middlewares/extractUidAndVerification.js";
import extraDetailsInitiateObjects from "../../middlewares/userDetails/extraDetailsInitiateObjects.js";
import {
  getExtraDetails,
  createExtraDetails,
  updateExtraDetails,
  deleteExtraDetails,
} from "../../handlers/user/ExtraDetailsHandlers.js";
getExtraDetails; // userDetailsRouter class extends BaseRouter
const userDetailsRouter = Router();
userDetailsRouter.use(extractUidAndVerification);
// Use middleware to initiate extra details objects
userDetailsRouter.use(extraDetailsInitiateObjects);

// Define routes for extra details
userDetailsRouter
  .route("/")
  .get(getExtraDetails) // GET request to retrieve extra details
  .post(createExtraDetails) // POST request to create extra details
  .put(updateExtraDetails) // PUT request to update extra details
  .delete(deleteExtraDetails); // DELETE request to delete extra details

// Export userDetailsRouter class
export default userDetailsRouter;
