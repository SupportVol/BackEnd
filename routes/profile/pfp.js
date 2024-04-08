import { Router } from "express";
import PFP from "../../models/profile/pfp.js";

const pfpRouter = Router();
pfpRouter
  .route("/")
  .get(async (req, res) => {
    const { uid } = req.headers;
    const pH = new PFP(uid);
    const pHres = await pH.get();
    res.json(pHres);
  })
  .put((req, res) => {
    const { uid, newByte8Array } = req.body;
    const pH = new PFP(uid);
    pH.update(newByte8Array);
  });
export default pfpRouter;

// 
