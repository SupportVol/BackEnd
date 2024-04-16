import { Router } from "express";
import trainInitiateObjects from "../../middlewares/training/trainInitiateObjects";
import trainAuthorization from "../../middlewares/training/trainAuthorization";
import {
  createTraining,
  deleteTraining,
  getTraining,
  updateTraining,
} from "../../handlers/training/TrainHandlers";

const trainRouter = Router();

trainRouter.use(trainInitiateObjects);
trainRouter.route("/").get(getTraining);
trainRouter.use(trainAuthorization);
trainRouter
  .route("/")
  .post(createTraining)
  .put(updateTraining)
  .delete(deleteTraining);

export default trainRouter;
