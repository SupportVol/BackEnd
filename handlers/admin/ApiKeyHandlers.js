const getApiKeys = async (req, res) => {
  let allApiKeys;
  console.log(req.all);
  if (req.all) {
    allApiKeys = await req.apiInstance.readAll();
  } else {
    allApiKeys = await req.apiInstance.read();
  }
  res.status(200).json({ response: allApiKeys });
};
const createApiKey = async (req, res) => {
  const newApiKey = await req.apiInstance.create();
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
