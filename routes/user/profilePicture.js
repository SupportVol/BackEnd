// Importing necessary modules
import extractUidAndVerification from "../../middlewares/extractUidAndVerification.js";
import pfpInitiateObjects from "../../middlewares/userDetails/profilePictureInitiateObjects.js";
import {
  getProfilePicture,
  uploadProfilePicture,
  deleteProfilePicture,
} from "../../handlers/user/ProfilePictureHandlers.js";
/**
 * profilePictureRouter class
 * This class extends the BaseRouter class and initializes the routes for profile picture operations.
 */
export default class profilePictureRouter extends BaseRouter {
  /**
   * initializeRoutes method
   * This method initializes the routes for getting, uploading, and deleting the profile picture.
   */
  initializeRoutes() {
    // Use the middleware to extract UID and verification details
    this.use(extractUidAndVerification);
    // Use the middleware to initiate profile picture objects
    this.use(pfpInitiateObjects);
    // Define the routes for profile picture operations
    this.route("/")
      .get(getProfilePicture) // Route for getting the profile picture
      .post(uploadProfilePicture) // Route for uploading the profile picture
      .delete(deleteProfilePicture); // Route for deleting the profile picture
  }
}
