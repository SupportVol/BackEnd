import { Router } from "express";
import Auth from "../models/auth.js";

const authRouter = Router();

authRouter.post("/signup", (req, res) => {
  const { email, password, name } = req.headers;
  const uid = new Auth(email, password).createUser();
});

authRouter.post("/login", (req, res) => {
  const { email, password } = req.headers;
  console.log(req.header("FIREBASE_AUTH_TOKEN"));
  const uid = new Auth(email, password).loginUser();
});

export default authRouter;
