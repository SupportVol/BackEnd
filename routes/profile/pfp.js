import { Router } from "express";
import PFP from "../../models/profile/pfp.js";
import { writeFile } from "fs";

const pfpRouter = Router();
pfpRouter
  .route("/")
  .get(async (req, res) => {
    const { uid } = req.headers;
    const pH = new PFP(uid);
    const pHres = await pH.get();
    console.log(pHres);
  })
  .put((req, res) => {
    console.log(req);
    const { uid, newByte8Array } = req.headers;
    const filePath = `../../local/${uid}.png`;
    const imageData = new Uint8Array(newByte8Array);
    writeFile(filePath, Buffer.from(imageData), (err) => {
      if (err) {
        console.error("Error saving PNG file:", err);
      } else {
        console.log("PNG file saved successfully.");
      }
    });
    const pH = new PFP(uid);
    pH.update(filePath);
  });
export default pfpRouter;
