/**
 * Express router for managing Quick Projects (QP).
 * @module routers/qpRouter
 */

import { Router } from "express";
import extractUidAndVerification from "../../../middlewares/extractUidAndVerification.js";
import qpInitiateObjects from "../../../middlewares/community/qpInitiateObjects.js";

/**
 * Express router for Quick Projects.
 * @type {object}
 * @const
 * @namespace qpRouter
 */
const qpRouter = Router();

/**
 * Route for handling GET requests to retrieve all Quick Projects.
 * @name GET_/qpRouter
 * @function
 * @memberof module:routers/qpRouter
 * @inner
 * @param {string} path - Express route path
 * @param {function} middleware - Middleware function to extract UID and verification
 * @param {function} middleware - Middleware function to initialize Quick Project objects
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 */
qpRouter.get("/", extractUidAndVerification, qpInitiateObjects, (req, res) => {
  const [response, allDocs] = req.qpInstance.readQPAll();
  res.json({ status: response ? 200 : 500, allDocs: allDocs });
});

/**
 * Route for handling POST requests to create a Quick Project.
 * @name POST_/qpRouter
 * @function
 * @memberof module:routers/qpRouter
 * @inner
 * @param {string} path - Express route path
 * @param {function} middleware - Middleware function to extract UID and verification
 * @param {function} middleware - Middleware function to initialize Quick Project objects
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 */
qpRouter.post(
  "/",
  extractUidAndVerification,
  qpInitiateObjects,
  async (req, res) => {
    const [response, docID] = await req.qpInstance.createQP();
    res.json({ status: response ? 200 : 500, docID: docID });
  }
);

/**
 * Route for handling PUT requests to update a Quick Project.
 * @name PUT_/qpRouter
 * @function
 * @memberof module:routers/qpRouter
 * @inner
 * @param {string} path - Express route path
 * @param {function} middleware - Middleware function to extract UID and verification
 * @param {function} middleware - Middleware function to initialize Quick Project objects
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 */
qpRouter.put("/", extractUidAndVerification, qpInitiateObjects, (req, res) => {
  const [response, _] = req.qpInstance.updateQP();
  res.json({ status: response ? 200 : 500 });
});

/**
 * Route for handling DELETE requests to delete a Quick Project.
 * @name DELETE_/qpRouter
 * @function
 * @memberof module:routers/qpRouter
 * @inner
 * @param {string} path - Express route path
 * @param {function} middleware - Middleware function to extract UID and verification
 * @param {function} middleware - Middleware function to initialize Quick Project objects
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 */
qpRouter.delete(
  "/",
  extractUidAndVerification,
  qpInitiateObjects,
  async (req, res) => {
    const [response, _] = await req.qpInstance.deleteQP();
    res.json({ status: response ? 200 : 500 });
  }
);

export default qpRouter;
