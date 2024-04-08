import { Router } from "express";
import phoneNumber from "../../models/profile/phoneNumber.js";

const pHRouter = Router();
pHRouter
  .route("/")
  .get(async (req, res) => {
    const { uid } = req.headers;
    const pH = new phoneNumber(uid);
    const pHres = await pH.get();
    console.log(pHres);
  })
  .put((req, res) => {
    const { uid, newphonenumber } = req.headers;
    console.log(newphonenumber, uid);
    const pH = new phoneNumber(uid);
    pH.update(newphonenumber);
  });
export default pHRouter;
