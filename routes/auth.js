import { Router } from "express";
import authInitiateObjects from "../middlewares/auth/authInitiateObjects.js";

const authRouter = Router();

authRouter.post("/signup", authInitiateObjects, (req, res) => {
  const { response, uid } = req.auth.createUser();
  res.json({ uid: response ? uid : NaN });
});

authRouter.post("/login", authInitiateObjects, (req, res) => {
  const { response, uid } = req.auth.loginUser();
  res.json({ uid: response ? uid : NaN });
});

export default authRouter;
