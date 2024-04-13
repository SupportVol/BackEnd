import extractUidAndVerification from "../../middlewares/extractUidAndVerification.js";
import BaseRouter from "../../utils/routing/BaseRouter.js";
import projectInitiateObjects from "../../middlewares/community/projectInitiateObjects.js";

/**
 * This class extends the BaseRouter to handle community related routes.
 * It uses middleware to extract user id and verification status, and to initiate project objects.
 * It defines routes for reading, creating, updating, and deleting communities.
 * @class commRouter
 * @extends {BaseRouter}
 */
class commRouter extends BaseRouter {
  /**
   * Initializes community related routes.
   * @method initializeRoutes
   */
  initializeRoutes() {
    // Use middleware to extract user id and verification status, and to initiate project objects
    this.use(extractUidAndVerification, projectInitiateObjects);

    // Define route for reading communities
    this.get("/", readCommunity);

    // Define route for creating communities
    this.post("/", createCommunity);

    // Define route for updating communities
    this.put("/", updateCommunity);

    // Define route for deleting communities
    this.delete("/", deleteCommunity);
  }
}

// Export the commRouter class as a module
export default commRouter;
