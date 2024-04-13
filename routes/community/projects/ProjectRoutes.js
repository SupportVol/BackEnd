// Importing necessary modules
import extractUidAndVerification from "../../../middlewares/extractUidAndVerification.js";
import projectInitiateObjects from "../../../middlewares/community/projectInitiateObjects.js";
import BaseRouter from "../../../utils/routing/BaseRouter.js";

/**
 * projectRouter class extends BaseRouter to manage project related routes
 */
class projectRouter extends BaseRouter {
  /**
   * initializeRoutes method is used to initialize all the project related routes
   */
  initializeRoutes() {
    // Middleware for extracting UID and verification
    this.use(extractUidAndVerification, projectInitiateObjects);

    // Route for reading a project
    this.get("/", readProject);

    // Route for creating a project
    this.post("/", createProject);

    // Route for updating a project
    this.put("/", updateProject);

    // Route for deleting a project
    this.delete("/", deleteProject);
  }
}

// Exporting the projectRouter class
export default projectRouter;
