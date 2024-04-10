import { Router } from "express";
import authInitiateObjects from "../middlewares/auth/authInitiateObjects.js";
import { handleLogin, handleSignup } from "../handlers/authHandlers.js";

/**
 * Router for authentication-related endpoints.
 */
const authRouter = Router();

authRouter.post("/signup", authInitiateObjects, handleSignup);

authRouter.post("/login", authInitiateObjects, handleLogin);

export default authRouter;
