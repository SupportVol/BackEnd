import { Router } from "express";
import authInitiateObjects from "../middlewares/auth/authInitiateObjects.js";

const authRouter = Router();

authRouter.post("/signup", authInitiateObjects, async (req, res) => {
  const [response, uid] = await req.auth.createUser();
  res.json({ status: response ? 200 : 500, uid: uid });
});

authRouter.post("/login", authInitiateObjects, (req, res) => {
  const [response, uid] = req.auth.loginUser();
  res.json({ status: response ? 200 : 500, uid: uid });
});

export default authRouter;
