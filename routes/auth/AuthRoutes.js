// Importing necessary modules and functions
import authInitiateObjects from "../../middlewares/auth/authInitiateObjects.js";
import {
  handleLogin,
  handleResetPassword,
  handleSignup,
  handleUsers,
} from "../../handlers/auth/authHandlers.js";
import { Router } from "express";

/**
 * authRouter class extends BaseRouter to handle authentication routes.
 * It initializes routes for signup and login.
 */
const authRouter = new Router();

authRouter.use(authInitiateObjects);

// Setup POST route for "/signup"
authRouter.post("/signup", handleSignup);

// Setup POST route for "/login"
authRouter.post("/login", handleLogin);

authRouter.put("/reset-password", handleResetPassword);

authRouter.get("/all", handleUsers);
export default authRouter;
