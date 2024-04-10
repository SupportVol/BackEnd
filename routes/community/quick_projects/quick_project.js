import { Router } from "express";
import extractUidAndVerification from "../../../middlewares/extractUidAndVerification.js";
import qpInitiateObjects from "../../../middlewares/community/qpInitiateObjects.js";

const qpRouter = Router();

qpRouter
  .route("/")
  .get(extractUidAndVerification, qpInitiateObjects, (req, res) => {
    const [response, allDocs] = req.qpInstance.readQPAll();
    res.json({ status: response ? 200 : 500, allDocs: allDocs });
  })
  .post(extractUidAndVerification, qpInitiateObjects, async (req, res) => {
    const [response, docID] = await req.qpInstance.createQP();
    res.json({ status: response ? 200 : 500, docID: docID });
  })
  .put(extractUidAndVerification, qpInitiateObjects, (req, res) => {
    const [response, _] = req.qpInstance.updateQP();
    res.json({ status: response ? 200 : 500 });
  })
  .delete(extractUidAndVerification, qpInitiateObjects, async (req, res) => {
    const [response, _] = await req.qpInstance.deleteQP();
    res.json({ status: response ? 200 : 500 });
  });
export default qpRouter;
