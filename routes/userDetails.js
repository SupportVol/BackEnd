import { Router } from "express";
import extractUidAndVerification from "../middlewares/extractUidAndVerification.js";
import pfpInitiateObjects from "../middlewares/userDetails/pfpInitiateObjects.js";
import pHInitiateObjects from "../middlewares/userDetails/pHInitiateObjects.js";
import extraDetailsInitiateObjects from "../middlewares/userDetails/extraDetailsInitiateObjects.js";
const userDetailsRouter = Router();

// PFP Router
userDetailsRouter
  .route("/pfp")
  .get(extractUidAndVerification, pfpInitiateObjects, async (req, res) => {
    const { response, msg } = req.storage.getDownloadURL(`pfp/${uid}`);
    res.json({ status: response ? 200 : 500, return: msg });
  })
  .post(extractUidAndVerification, pfpInitiateObjects, (req, res) => {
    const { imageBase64 } = req.headers;
    const { response, msg, url } = req.storage.uploadByte8Array(
      req.path,
      imageBase64
    );
    req.auth.updateUser(req.uid, { photoUrl: url });
    res.json({ status: response ? 200 : 500, return: msg });
  })
  .delete(extractUidAndVerification, pfpInitiateObjects, (req, res) => {
    const { response, url } = req.storage.deleteFile(`pfp/${req.uid}`);
    req.auth.updateUser(req.uid, { photoUrl: url });
    res.json({ status: response ? 200 : 500, return: url });
  });

// Phone Number Router
userDetailsRouter
  .route("/phoneNumber")
  .get(extractUidAndVerification, pHInitiateObjects, (req, res) => {
    const { response, msg } = req.auth.getUser(req.uid);
    res.json({
      status: response ? 200 : 500,
      return: response ? msg.phoneNumber : msg,
    });
  })
  .post(extractUidAndVerification, pHInitiateObjects, (req, res) => {
    const { uid, updateUserData } = req.headers;
    const { response, msg } = req.auth.updateUser(uid, updateUserData);
    res.json({
      status: response ? 200 : 500,
      return: response ? msg.phoneNumber : msg,
    });
  })
  .delete(extractUidAndVerification, pHInitiateObjects, (req, res) => {
    const { response, msg } = req.auth.deleteUser(req.uid);
    res.json({
      status: response ? 200 : 500,
      return: msg,
    });
  });

// Extra Details Router
userDetailsRouter
  .route("/extraDetails")
  .get(extractUidAndVerification, extraDetailsInitiateObjects, (req, res) => {
    const { response, msg } = req.firestore.read();
    res.json({
      status: response ? 200 : 500,
      return: msg,
    });
  })
  .post(extractUidAndVerification, extraDetailsInitiateObjects, (req, res) => {
    const { response, msg } = req.firestore.create(
      JSON.parse(req.headers.data)
    );
    res.json({
      status: response ? 200 : 500,
      return: msg,
    });
  })
  .put(extractUidAndVerification, extraDetailsInitiateObjects, (req, res) => {
    const { response, msg } = req.firestore.update(
      JSON.parse(req.headers.data)
    );
    res.json({
      status: response ? 200 : 500,
      return: msg,
    });
  })
  .delete(
    extractUidAndVerification,
    extraDetailsInitiateObjects,
    (req, res) => {
      const { response, msg } = req.firestore.delete();
      res.json({
        status: response ? 200 : 500,
        return: msg,
      });
    }
  );
export default userDetailsRouter;
