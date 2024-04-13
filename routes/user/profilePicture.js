// Importing necessary modules
import extractUidAndVerification from "../../middlewares/extractUidAndVerification.js";
import pfpInitiateObjects from "../../middlewares/userDetails/profilePictureInitiateObjects.js";
import {
  getProfilePicture,
  uploadProfilePicture,
  deleteProfilePicture,
} from "../../handlers/user/ProfilePictureHandlers.js";
import { Router } from "express";

const profilePictureRouter = Router();
profilePictureRouter.use(extractUidAndVerification);
// Use the middleware to initiate profile picture objects
profilePictureRouter.use(pfpInitiateObjects);
// Define the routes for profile picture operations
profilePictureRouter
  .route("/")
  .get(getProfilePicture) // Route for getting the profile picture
  .post(uploadProfilePicture) // Route for uploading the profile picture
  .delete(deleteProfilePicture); // Route for deleting the profile picture
export default profilePictureRouter;
