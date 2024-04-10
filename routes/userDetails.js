import { Router } from "express";
import extractUidAndVerification from "../middlewares/extractUidAndVerification.js";
import pfpInitiateObjects from "../middlewares/userDetails/pfpInitiateObjects.js";
import pHInitiateObjects from "../middlewares/userDetails/pHInitiateObjects.js";
import extraDetailsInitiateObjects from "../middlewares/userDetails/extraDetailsInitiateObjects.js";

const userDetailsRouter = Router();

userDetailsRouter
  .route("/pfp")
  /**
   * Route to get user profile picture.
   */
  .get(extractUidAndVerification, pfpInitiateObjects, async (req, res) => {
    const [response, msg] = req.storage.getDownloadURL(`pfp/${req.uid}`);
    res.json({ status: response ? 200 : 500, return: msg });
  })
  /**
   * Route to upload user profile picture.
   */
  .post(extractUidAndVerification, pfpInitiateObjects, (req, res) => {
    const { imageBase64, reqUrl } = req.headers;
    if (imageBase64) {
      const [response, msg, url] = req.storage.uploadByte8Array(
        req.path,
        imageBase64
      );
      req.auth.updateUser(req.uid, { photoUrl: url });
      res.json({ status: response ? 200 : 500, return: msg });
    } else {
      req.auth.updateUser(req.uid, { photoUrl: reqUrl });
      res.json({ status: response ? 200 : 500, return: msg });
    }
  })
  /**
   * Route to delete user profile picture.
   */
  .delete(extractUidAndVerification, pfpInitiateObjects, (req, res) => {
    const [response, url] = req.storage.deleteFile(`pfp/${req.uid}`);
    req.auth.updateUser(req.uid, { photoUrl: url });
    res.json({ status: response ? 200 : 500, return: url });
  });

userDetailsRouter
  .route("/phoneNumber")
  /**
   * Route to get user phone number.
   */
  .get(extractUidAndVerification, pHInitiateObjects, (req, res) => {
    const [response, msg] = req.auth.getUser(req.uid);
    res.json({
      status: response ? 200 : 500,
      return: response ? msg.phoneNumber : msg,
    });
  })
  /**
   * Route to update user phone number.
   */
  .post(extractUidAndVerification, pHInitiateObjects, (req, res) => {
    const { uid, updateUserData } = req.headers;
    const [response, msg] = req.auth.updateUser(uid, updateUserData);
    res.json({
      status: response ? 200 : 500,
      return: response ? msg.phoneNumber : msg,
    });
  })
  /**
   * Route to delete user phone number.
   */
  .delete(extractUidAndVerification, pHInitiateObjects, (req, res) => {
    const [response, msg] = req.auth.deleteUser(req.uid);
    res.json({
      status: response ? 200 : 500,
      return: msg,
    });
  });

userDetailsRouter
  .route("/extraDetails")
  /**
   * Route to get extra user details.
   */
  .get(extractUidAndVerification, extraDetailsInitiateObjects, (req, res) => {
    const [response, msg] = req.firestore.read();
    res.json({
      status: response ? 200 : 500,
      return: msg,
    });
  })
  /**
   * Route to create extra user details.
   */
  .post(extractUidAndVerification, extraDetailsInitiateObjects, (req, res) => {
    const [response, msg] = req.firestore.create(JSON.parse(req.headers.data));
    res.json({
      status: response ? 200 : 500,
      return: msg,
    });
  })
  /**
   * Route to update extra user details.
   */
  .put(extractUidAndVerification, extraDetailsInitiateObjects, (req, res) => {
    const [response, msg] = req.firestore.update(JSON.parse(req.headers.data));
    res.json({
      status: response ? 200 : 500,
      return: msg,
    });
  })
  /**
   * Route to delete extra user details.
   */
  .delete(
    extractUidAndVerification,
    extraDetailsInitiateObjects,
    (req, res) => {
      const [response, msg] = req.firestore.delete();
      res.json({
        status: response ? 200 : 500,
        return: msg,
      });
    }
  );

export default userDetailsRouter;
