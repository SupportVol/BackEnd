import { Router } from "express";
import extractUidAndVerification from "../../../middlewares/extractUidAndVerification.js";
import iInitiateObjects from "../../../middlewares/community/iInitiateObjects.js";

/**
 * Router for handling Initiatives-related routes.
 * @type {Router}
 */
const iRouter = Router();

/**
 * GET request handler for retrieving all Initiatives.
 */
iRouter.get("/", extractUidAndVerification, iInitiateObjects, (req, res) => {
  const [response, allDocs] = req.qpInstance.readIAll();
  res.json({ status: response ? 200 : 500, allDocs });
});

/**
 * POST request handler for creating a new Initiative.
 */
iRouter.post(
  "/",
  extractUidAndVerification,
  iInitiateObjects,
  async (req, res) => {
    const [response, docID] = await req.qpInstance.createI();
    res.json({ status: response ? 200 : 500, docID });
  }
);

/**
 * PUT request handler for updating an Initiative.
 */
iRouter.put("/", extractUidAndVerification, iInitiateObjects, (req, res) => {
  const [response] = req.qpInstance.updateI();
  res.json({ status: response ? 200 : 500 });
});

/**
 * DELETE request handler for deleting an Initiative.
 */
iRouter.delete(
  "/",
  extractUidAndVerification,
  iInitiateObjects,
  async (req, res) => {
    const [response] = await req.qpInstance.deleteI();
    res.json({ status: response ? 200 : 500 });
  }
);

export default iRouter;
