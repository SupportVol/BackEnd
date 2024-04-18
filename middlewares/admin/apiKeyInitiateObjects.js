import ApiKey from "../../models/authentication/ApiKeyModel.js";

const apiKeyInitiateObjects = (req, res, next) => {
  // Check if the user is authorized
  const response = isAuthorized(req.uid, ["Admin"], [0]);
  if (Array.isArray(response)) {
    return res.json({ response });
  }

  // Create a new Ban object and add it to the request object
  req.apiInstance = new ApiKey(req.body.banUID);

  // Call the next middleware
  next();
};

// Export the middleware
export default apiKeyInitiateObjects;
