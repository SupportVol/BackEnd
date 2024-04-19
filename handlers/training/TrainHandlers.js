const getTraining = async (req, res) => {
  res.json({ response: await req.trainInstance.read() })
}
const createTraining = async (req, res) => {
  res.json({ response: await req.trainInstance.create() })
}
const updateTraining = async (req, res) => {
  res.json({ response: await req.trainInstance.update() })
}
const deleteTraining = async (req, res) => {
  res.json({ response: await req.trainInstance.delete() })
}
export { getTraining, createTraining, updateTraining, deleteTraining }
