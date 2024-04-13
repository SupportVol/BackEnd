/**
 * Express router for managing group-related endpoints.
 * @module routers/groupRouter
 */
import extractUidAndVerification from "../../middlewares/extractUidAndVerification.js";
import grpInitiateObjects from "../../middlewares/chat/groupInitiateObjects.js";
import BaseRouter from "../../utils/routing/BaseRouter.js";

/**
 * grpRouter class extends BaseRouter to manage group-related endpoints.
 */
class grpRouter extends BaseRouter {
  /**
   * Initializes the routes for group-related endpoints.
   */
  initializeRoutes() {
    // Middleware for extracting UID and verification
    this.use(extractUidAndVerification);
    // Middleware for initiating group objects
    this.use(grpInitiateObjects);

    // Route for getting group details
    this.get("/", getGroup);
    // Route for creating a new group
    this.post("/", createGroup);
    // Route for updating an existing group
    this.put("/", updateGroup);
    // Route for deleting a group
    this.delete("/", deleteGroup);
  }
}

export default grpRouter;
