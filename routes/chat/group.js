import { Router } from "express";
import extractUidAndVerification from "../../middlewares/extractUidAndVerification.js";

import grpInitiateObjects from "../../middlewares/chat/grpInitiateObjects.js";

const grpRouter = Router();

grpRouter
  .route("/")
  .get(extractUidAndVerification, grpInitiateObjects, async (req, res) => {
    try {
      const [response, msg] = await req.grpInstance.readGroup();
      res
        .status(response ? 200 : 500)
        .json({ status: response ? 200 : 500, return: msg });
    } catch (error) {
      console.error("Error in GET /:", error);
      res.status(500).json({ status: 500, message: "Internal Server Error" });
    }
  })
  .post(extractUidAndVerification, grpInitiateObjects, async (req, res) => {
    try {
      const [response, msg] = await req.grpInstance.createGroup(req.headers);
      res
        .status(response ? 200 : 500)
        .json({ status: response ? 200 : 500, return: msg });
    } catch (error) {
      console.error("Error in POST /:", error);
      res.status(500).json({ status: 500, message: "Internal Server Error" });
    }
  })
  .put(extractUidAndVerification, grpInitiateObjects, async (req, res) => {
    try {
      const [response, msg] = await req.grpInstance.updateGroup(req.headers);
      res
        .status(response ? 200 : 500)
        .json({ status: response ? 200 : 500, return: msg });
    } catch (error) {
      console.error("Error in PUT /:", error);
      res.status(500).json({ status: 500, message: "Internal Server Error" });
    }
  })
  .delete(extractUidAndVerification, grpInitiateObjects, async (req, res) => {
    try {
      const [response, msg] = await req.grpInstance.deleteGroup();
      res
        .status(response ? 200 : 500)
        .json({ status: response ? 200 : 500, return: msg });
    } catch (error) {
      console.error("Error in DELETE /:", error);
      res.status(500).json({ status: 500, message: "Internal Server Error" });
    }
  });

export default grpRouter;
