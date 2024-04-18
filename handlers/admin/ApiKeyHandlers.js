const getApiKeys = (req, res) => {
  const allApiKeys = req.apiInstance.readAll();
  res.status(200).json({ response: allApiKeys });
};
const createApiKey = (req, res) => {
  const newApiKey = req.apiInstance.create();
  res.status(200).json({ response: newApiKey });
};
const updateApiKey = (req, res) => {
  req.apiInstance.update();
  res.status(200);
};
const deleteApiKey = (req, res) => {
  req.apiInstance.delete();
  res.status(200);
};
export { getApiKeys, createApiKey, updateApiKey, deleteApiKey };
