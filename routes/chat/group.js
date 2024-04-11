/**
 * Express router for managing group-related endpoints.
 * @module routers/groupRouter
 */

import { Router } from "express";
import extractUidAndVerification from "../../middlewares/extractUidAndVerification.js";
import grpInitiateObjects from "../../middlewares/chat/grpInitiateObjects.js";

const grpRouter = Router();

/**
 * Route for retrieving all groups.
 * @name GET/api/groups
 * @function
 * @memberof module:routers/groupRouter
 * @param {function} extractUidAndVerification - Middleware to extract UID and verification status.
 * @param {function} grpInitiateObjects - Middleware to initiate group objects.
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 * @returns {object} JSON response indicating success or failure.
 */
grpRouter.get(
  "/",
  extractUidAndVerification,
  grpInitiateObjects,
  async (req, res) => {
    try {
      const [response, msg] = await req.grpInstance.readGroup();
      res
        .status(response ? 200 : 500)
        .json({ status: response ? 200 : 500, return: msg });
    } catch (error) {
      console.error("Error in GET /:", error);
      res.status(500).json({ status: 500, message: "Internal Server Error" });
    }
  }
);

/**
 * Route for creating a new group.
 * @name POST/api/groups
 * @function
 * @memberof module:routers/groupRouter
 * @param {function} extractUidAndVerification - Middleware to extract UID and verification status.
 * @param {function} grpInitiateObjects - Middleware to initiate group objects.
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 * @returns {object} JSON response indicating success or failure.
 */
grpRouter.post(
  "/",
  extractUidAndVerification,
  grpInitiateObjects,
  async (req, res) => {
    try {
      const [response, msg] = await req.grpInstance.createGroup(req.body);
      res
        .status(response ? 200 : 500)
        .json({ status: response ? 200 : 500, return: msg });
    } catch (error) {
      console.error("Error in POST /:", error);
      res.status(500).json({ status: 500, message: "Internal Server Error" });
    }
  }
);

/**
 * Route for updating an existing group.
 * @name PUT/api/groups
 * @function
 * @memberof module:routers/groupRouter
 * @param {function} extractUidAndVerification - Middleware to extract UID and verification status.
 * @param {function} grpInitiateObjects - Middleware to initiate group objects.
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 * @returns {object} JSON response indicating success or failure.
 */
grpRouter.put(
  "/",
  extractUidAndVerification,
  grpInitiateObjects,
  async (req, res) => {
    try {
      const [response, msg] = await req.grpInstance.updateGroup(req.body);
      res
        .status(response ? 200 : 500)
        .json({ status: response ? 200 : 500, return: msg });
    } catch (error) {
      console.error("Error in PUT /:", error);
      res.status(500).json({ status: 500, message: "Internal Server Error" });
    }
  }
);

/**
 * Route for deleting a group.
 * @name DELETE/api/groups
 * @function
 * @memberof module:routers/groupRouter
 * @param {function} extractUidAndVerification - Middleware to extract UID and verification status.
 * @param {function} grpInitiateObjects - Middleware to initiate group objects.
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 * @returns {object} JSON response indicating success or failure.
 */
grpRouter.delete(
  "/",
  extractUidAndVerification,
  grpInitiateObjects,
  async (req, res) => {
    try {
      const [response, msg] = await req.grpInstance.deleteGroup();
      res
        .status(response ? 200 : 500)
        .json({ status: response ? 200 : 500, return: msg });
    } catch (error) {
      console.error("Error in DELETE /:", error);
      res.status(500).json({ status: 500, message: "Internal Server Error" });
    }
  }
);

export default grpRouter;
