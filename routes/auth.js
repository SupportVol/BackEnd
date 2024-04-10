import { Router } from "express";
import authInitiateObjects from "../middlewares/auth/authInitiateObjects.js";

/**
 * Router for authentication-related endpoints.
 */
const authRouter = Router();

authRouter.post("/signup", authInitiateObjects, handleSignup);

authRouter.post(
  "/login",
  authInitiateObjects,
  (req, res) => {
    const [response, uid] = req.auth.loginUser();
    res.json({ status: response ? 200 : 500, uid: uid });
  }
);

export default authRouter;
