const getTraining = (req, res) => {
  res.json({ response: req.trainInstance.read() });
};
const createTraining = (req, res) => {
  res.json({ response: req.trainInstance.create() });
};
const updateTraining = (req, res) => {
  res.json({ response: req.trainInstance.update() });
};
const deleteTraining = (req, res) => {
  res.json({ response: req.trainInstance.delete() });
};
export { getTraining, createTraining, updateTraining, deleteTraining };
