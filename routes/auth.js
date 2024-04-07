import { Router } from 'express';
import  Auth  from '../models/auth.js'
const authRouter = Router();

authRouter.post("/signup", (req, res) => {
    const { email, password, name } = req.params;
    const result = new Auth(email, password).createUser()
});

authRouter.post("/login", (req, res) => {
    console.log(...req.params)
    const result = new Auth(...req.params).loginUser()
});

export default authRouter;