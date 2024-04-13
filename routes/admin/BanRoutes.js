// Importing necessary modules
import banInitiateObjects from "../../middlewares/admin/banInitiateObjects.js";
import BaseRouter from "../../utils/routing/BaseRouter.js";

/**
 * banRouter class extends BaseRouter to manage ban related routes.
 * It initializes the routes for getting ban status, banning a user, and unbanning a user.
 */
class banRouter extends BaseRouter {
  /**
   * Method to initialize routes.
   * It uses banInitiateObjects middleware for all routes.
   * It defines GET, POST, and PUT routes for "/", which respectively handle getting ban status, banning a user, and unbanning a user.
   */
  initializeRoutes() {
    // Use banInitiateObjects middleware for all routes
    this.use(banInitiateObjects);

    // Define GET route for getting ban status
    this.get("/", getBanStatus);

    // Define POST route for banning a user
    this.post("/", banUser);

    // Define PUT route for unbanning a user
    this.put("/", unBanUser);
  }
}

// Export banRouter class
export default banRouter;
