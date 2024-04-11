import { Router } from "express";
import extractUidAndVerification from "../../middlewares/extractUidAndVerification.js";
import postInitiateObjects from "../../middlewares/organizations/postInitiateObjects.js";

const postRouter = Router();

postRouter
  .route("/")
  .get(extractUidAndVerification, postInitiateObjects, async (req, res) => {
    const [response, postData] = await req.postInitialization.read();
    res.status(response ? 200 : 500).json({ postData: postData });
  })
  .post(extractUidAndVerification, postInitiateObjects, async (req, res) => {
    const [response, docID] = await req.postInitialization.create();
    res.status(response ? 200 : 500).json({ docID: docID });
  })
  .put(extractUidAndVerification, postInitiateObjects, async (req, res) => {
    const [response, _] = await req.postInitialization.update(req.body);
    res.status(response ? 200 : 500);
  })
  .delete(extractUidAndVerification, postInitiateObjects, async (req, res) => {
    const [response, _] = await req.postInitialization.delete();
    res.status(response ? 200 : 500);
  });

export default postRouter;
