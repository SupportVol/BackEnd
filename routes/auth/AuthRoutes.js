// Importing necessary modules and functions
import authInitiateObjects from "../../middlewares/auth/authInitiateObjects.js";
import { handleLogin, handleSignup } from "../../handlers/auth/authHandlers.js";
import BaseRouter from "../../utils/routing/BaseRouter.js";

/**
 * authRouter class extends BaseRouter to handle authentication routes.
 * It initializes routes for signup and login.
 */
class authRouter extends BaseRouter {
  /**
   * This method initializes the routes for the authRouter.
   * It uses the authInitiateObjects middleware for all routes.
   * It sets up POST routes for "/signup" and "/login".
   */
  initializeRoutes() {
    // Use authInitiateObjects middleware for all routes
    this.use(authInitiateObjects);

    // Setup POST route for "/signup"
    this.post("/signup", handleSignup);

    // Setup POST route for "/login"
    this.post("/login", handleLogin);
  }
}

// Export the authRouter class
export default authRouter;
