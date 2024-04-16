import Training from "../../models/training/TrainingModel";

const trainInitiateObjects = (req, res, next) => {
  const {
    name,
    description,
    location,
    trainer,
    participants,
    status,
    additional_notes,
    orgID,
  } = req.body;
  req.trainInstance = new Training(
    name,
    description,
    location,
    trainer,
    participants,
    status,
    additional_notes,
    orgID
  );
  next();
};
export default trainInitiateObjects;
