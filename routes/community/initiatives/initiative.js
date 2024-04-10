import { Router } from "express";
import extractUidAndVerification from "../../../middlewares/extractUidAndVerification.js";
import iInitiateObjects from "../../../middlewares/community/iInitiateObjects.js";

const iRouter = Router();

iRouter
  .route("/")
  .get(extractUidAndVerification, iInitiateObjects, (req, res) => {
    const [response, allDocs] = req.qpInstance.readIAll();
    res.json({ status: response ? 200 : 500, allDocs: allDocs });
  })
  .post(extractUidAndVerification, iInitiateObjects, async (req, res) => {
    const [response, docID] = await req.qpInstance.createI();
    res.json({ status: response ? 200 : 500, docID: docID });
  })
  .put(extractUidAndVerification, iInitiateObjects, (req, res) => {
    const [response, _] = req.qpInstance.updateI();
    res.json({ status: response ? 200 : 500 });
  })
  .delete(extractUidAndVerification, iInitiateObjects, async (req, res) => {
    const [response, _] = await req.qpInstance.deleteI();
    res.json({ status: response ? 200 : 500 });
  });
export default iRouter;
