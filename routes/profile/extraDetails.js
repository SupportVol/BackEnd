import { Router } from "express";
import FirestoreCRUD from "../../models/profile/extraDetails.js";
const edRouter = Router();
const collectionName = "users";

edRouter
  .route("/")
  .get(async (req, res) => {
    const { uid } = req.headers;
    const fCRUD = new FirestoreCRUD(collectionName, uid);
    const usr = await fCRUD.read(uid);
    console.log(usr);
    res.json(usr);
  })
  .post((req, res) => {
    const { uid } = req.headers;
    delete req.headers.uid;
    const fCRUD = new FirestoreCRUD(collectionName, uid);
    fCRUD.create(req.headers);
    res.sendStatus(200);
  })
  .put((req, res) => {
    const { uid } = req.headers;
    delete req.headers.uid;
    const fCRUD = new FirestoreCRUD(collectionName, uid);
    fCRUD.update(req.headers);
    res.sendStatus(200);
  })
  .delete((req, res) => {
    const { uid } = req.headers;

    const fCRUD = new FirestoreCRUD(collectionName, uid);
    fCRUD.delete(uid);
    res.sendStatus(200);
  });

export default edRouter;
