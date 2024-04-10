import { Router } from "express";
import extractUidAndVerification from "../../middlewares/extractUidAndVerification.js";
import commInitiateObjects from "../../middlewares/community/commInitiateObjects.js";

const commRouter = Router();

commRouter
  .route("/")
  .get(extractUidAndVerification, commInitiateObjects, async (req, res) => {
    const [response, allDocs] = await req.commInstance.read();
    res.json({ status: response ? 200 : 500, allDocs: allDocs });
  })
  .post(extractUidAndVerification, commInitiateObjects, async (req, res) => {
    const [response, docID] = await req.commInstance.create(req.headers);
    res.json({ status: response ? 200 : 500, docID: docID });
  })
  .put(extractUidAndVerification, commInitiateObjects, (req, res) => {
    const [response, _] = req.commInstance.update(req.headers);
    res.json({ status: response ? 200 : 500 });
  })
  .delete(extractUidAndVerification, commInitiateObjects, async (req, res) => {
    const [response, _] = await req.commInstance.delete();
    res.json({ status: response ? 200 : 500 });
  });
export default commRouter;
