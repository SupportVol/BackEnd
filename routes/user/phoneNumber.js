// Importing necessary modules
import extractUidAndVerification from "../../middlewares/extractUidAndVerification.js";
import pHInitiateObjects from "../../middlewares/userDetails/phoneNumberInitiateObjects.js";
import BaseRouter from "../../utils/routing/BaseRouter.js";

/**
 * userDetailsRouter class extends the BaseRouter class.
 * It initializes the routes for user details.
 */
class userDetailsRouter extends BaseRouter {
  /**
   * This method initializes the routes for user details.
   * It uses the extractUidAndVerification and pHInitiateObjects middlewares.
   * It defines the GET, POST, and DELETE methods for the "/" route.
   */
  initializeRoutes() {
    // Use the extractUidAndVerification middleware
    this.use(extractUidAndVerification);
    // Use the pHInitiateObjects middleware
    this.use(pHInitiateObjects);

    // Define the GET, POST, and DELETE methods for the "/" route
    this.route("/")
      .get(getPhoneNumber)
      .post(updatePhoneNumber)
      .delete(deletePhoneNumber);
  }
}

// Export the userDetailsRouter class
export default userDetailsRouter;
