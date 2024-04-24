import Training from '../../models/training/TrainingModel.js'

const trainInitiateObjects = (req, res, next) => {
  const {
    name,
    description,
    location,
    trainer,
    participants,
    // feedback,
    status,
    additional_notes,
    orgID,
    trainID
  } = req.body
  req.trainInstance = new Training(
    name,
    description,
    location,
    trainer,
    participants,
    // feedback,
    status,
    additional_notes,
    orgID,
    trainID
  )
  next()
}
export default trainInitiateObjects
