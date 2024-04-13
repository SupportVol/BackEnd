// Importing necessary modules
import extractUidAndVerification from "../../middlewares/extractUidAndVerification.js";
import extraDetailsInitiateObjects from "../../middlewares/userDetails/extraDetailsInitiateObjects.js";
import BaseRouter from "../../utils/routing/BaseRouter.js";

// userDetailsRouter class extends BaseRouter
class userDetailsRouter extends BaseRouter {
  // Method to initialize routes
  initializeRoutes() {
    // Use middleware to extract UID and verification
    this.use(extractUidAndVerification);
    // Use middleware to initiate extra details objects
    this.use(extraDetailsInitiateObjects);

    // Define routes for extra details
    this.route("/")
      .get(getExtraDetails) // GET request to retrieve extra details
      .post(createExtraDetails) // POST request to create extra details
      .put(updateExtraDetails) // PUT request to update extra details
      .delete(deleteExtraDetails); // DELETE request to delete extra details
  }
}

// Export userDetailsRouter class
export default userDetailsRouter;
