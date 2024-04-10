import { Router } from "express";
import authInitiateObjects from "../middlewares/auth/authInitiateObjects.js";
import extractUidAndVerification from "../middlewares/extractUidAndVerification.js";
import { handleLogin, handleSignup } from "../handlers/authHandlers.js";

/**
 * Router for authentication-related endpoints.
 */
const authRouter = Router();

authRouter.post("/signup", authInitiateObjects, handleSignup);

authRouter.post(
  "/login",
  extractUidAndVerification,
  authInitiateObjects,
  handleLogin
);

export default authRouter;
