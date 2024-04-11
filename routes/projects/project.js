import { Router } from "express";
import extractUidAndVerification from "../../middlewares/extractUidAndVerification.js";
import Project from "../../models/projects/project.js";

const projectRouter = Router();

const projectInitiateObjects = (req, res, next) => {
  const {
    organizerUID,
    name,
    description,
    organizationUID,
    members,
    term,
    startDate,
    endDate,
    projectID,
  } = req.body;
  req.projectInitialization = new Project(
    organizerUID,
    name,
    description,
    organizationUID,
    members,
    term,
    startDate,
    endDate,
    projectID
  );
  next();
};

projectRouter
  .route("/")
  .get(extractUidAndVerification, async (req, res) => {
    const [response, projectData] = await req.projectInitialization.read();
    res.status(response ? 200 : 500).json({ projectData: projectData });
  })
  .post(extractUidAndVerification, async (req, res) => {
    const [response, docID] = await req.projectInitialization.create();
    res.status(response ? 200 : 500).json({ docID: docID });
  })
  .put(extractUidAndVerification, async (req, res) => {
    const [response, _] = await req.projectInitialization.update(req.body);
    res.status(response ? 200 : 500);
  })
  .delete(extractUidAndVerification, async (req, res) => {
    const [response, _] = await req.projectInitialization.delete();
    res.status(response ? 200 : 500);
  });

export default projectRouter;
