/**
 * Handles requests related to communities.
 * @module routes/community
 */

import { Router } from "express";
import extractUidAndVerification from "../../middlewares/extractUidAndVerification.js";
import commInitiateObjects from "../../middlewares/community/commInitiateObjects.js";

/**
 * Express router to handle community-related routes.
 * @type {Router}
 * @const
 */
const commRouter = Router();

/**
 * Route for getting, creating, updating, and deleting communities.
 * @name /
 * @function
 * @memberof module:routes/community
 * @inner
 * @param {string} path - Express route path
 * @param {callback} middleware - Express middleware
 */
commRouter
  .route("/")
  .get(extractUidAndVerification, commInitiateObjects, async (req, res) => {
    const [response, allDocs] = await req.commInstance.read();
    res.json({ status: response ? 200 : 500, allDocs: allDocs });
  })
  .post(extractUidAndVerification, commInitiateObjects, async (req, res) => {
    const [response, docID] = await req.commInstance.create(req.body);
    res.json({ status: response ? 200 : 500, docID: docID });
  })
  .put(extractUidAndVerification, commInitiateObjects, (req, res) => {
    const [response, _] = req.commInstance.update(req.body);
    res.json({ status: response ? 200 : 500 });
  })
  .delete(extractUidAndVerification, commInitiateObjects, async (req, res) => {
    const [response, _] = await req.commInstance.delete();
    res.json({ status: response ? 200 : 500 });
  });

export default commRouter;
