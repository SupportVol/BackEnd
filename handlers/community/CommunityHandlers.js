/**
 * Retrieves community data and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with community data.
 */
const readCommunity = async (req, res) => {
  const showAll = req.body.all ?? false;
  const { commInstance } = req;
  let response;
  if (showAll) {
    response = await commInstance.read();
  } else {
    response = await commInstance.readAll();
  }
  return res.json({
    response,
  });
};

/**
 * Creates a community and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with community creation status.
 */
const createCommunity = async (req, res) => {
  const { commInstance } = req;
  const instance1 = await commInstance.create();
  return res.json({
    response: instance1,
  });
};

/**
 * Updates a community and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with community update status.
 */
const updateCommunity = async (req, res) => {
  const { commInstance } = req;
  const instance2 = await commInstance.update();
  return res.json({
    response: instance2,
  });
};

/**
 * Deletes a community and sends a status response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - Response status.
 */
const deleteCommunity = async (req, res) => {
  const { commInstance } = req;
  return res.json({
    response: await commInstance.delete(),
  });
};

export { readCommunity, createCommunity, updateCommunity, deleteCommunity };
