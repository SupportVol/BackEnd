import { Router } from "express";
import newsInitiateObjects from "../../middlewares/admin/newsInitiateObjects.js";
import extractUidAndVerification from "../../middlewares/extractUidAndVerification.js";

const newsRouter = Router();

newsRouter
  .route("/")
  .get(extractUidAndVerification, newsInitiateObjects, async (req, res) => {
    const [response, newsData] = await req.newsInitialization.read();
    res.status(response ? 200 : 500).json({ newsData: newsData });
  })
  .post(extractUidAndVerification, newsInitiateObjects, async (req, res) => {
    const [response, docID] = await req.newsInitialization.create();
    res.status(response ? 200 : 500).json({ docID: docID });
  })
  .put(extractUidAndVerification, newsInitiateObjects, async (req, res) => {
    const [response, _] = await req.newsInitialization.update(req.body);
    res.status(response ? 200 : 500);
  })
  .delete(extractUidAndVerification, newsInitiateObjects, async (req, res) => {
    const [response, _] = await req.newsInitialization.delete();
    res.status(response ? 200 : 500);
  });

export default newsRouter;
