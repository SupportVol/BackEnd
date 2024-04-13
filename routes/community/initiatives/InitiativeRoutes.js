// Importing necessary modules
import extractUidAndVerification from "../../../middlewares/extractUidAndVerification.js";
import iInitiateObjects from "../../../middlewares/community/initiativeInitiateObjects.js";
import BaseRouter from "../../../utils/routing/BaseRouter.js";

// iRouter class extends BaseRouter
class iRouter extends BaseRouter {
  // Method to initialize routes
  initializeRoutes() {
    // Middleware for extracting UID and verification, and initiating objects
    this.use(extractUidAndVerification, iInitiateObjects);

    // Route for reading all initiatives
    this.get("/", readAllInitiatives);

    // Route for creating an initiative
    this.post("/", createInitiative);

    // Route for updating an initiative
    this.put("/", updateInitiative);

    // Route for deleting an initiative
    this.delete("/", deleteInitiative);
  }
}

// Exporting iRouter as default
export default iRouter;
