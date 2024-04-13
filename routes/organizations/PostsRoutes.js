// Importing necessary modules
import extractUidAndVerification from "../../middlewares/extractUidAndVerification.js";
import postInitiateObjects from "../../middlewares/organization/postInitiateObjects.js";
import BaseRouter from "../../utils/routing/BaseRouter.js";

/**
 * postRouter class extends BaseRouter to manage routes for posts.
 */
class postRouter extends BaseRouter {
  /**
   * initializeRoutes method is used to initialize all the routes related to posts.
   */
  initializeRoutes() {
    // Use middleware for extracting UID and verification, and initiating post objects
    this.use(extractUidAndVerification, postInitiateObjects);

    // Route for reading a post
    this.get("/", readPost);

    // Route for creating a post
    this.post("/", createPost);

    // Route for updating a post
    this.put("/", updatePost);

    // Route for deleting a post
    this.delete("/", deletePost);
  }
}

// Exporting postRouter class as default
export default postRouter;
