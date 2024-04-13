/**
 * Retrieves news data and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with news data.
 */
const getNews = (req, res) => {
  const { newsInitialization } = req;
  return res.json({
    response: newsInitialization.read(),
  });
};

/**
 * Creates news and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with news creation status.
 */
const createNews = (req, res) => {
  const { newsInitialization } = req;
  return res.json({
    response: newsInitialization.create(),
  });
};

/**
 * Updates news and sends a status response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - Response status.
 */
const updateNews = (req, res) => {
  const { newsInitialization } = req;
  const response = newsInitialization.update();
  return res.status(response[0] ? 200 : 500);
};

/**
 * Deletes news and sends a status response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - Response status.
 */
const deleteNews = (req, res) => {
  const { newsInitialization } = req;
  const response = newsInitialization.delete();
  return res.status(response[0] ? 200 : 500);
};

export { getNews, createNews, updateNews, deleteNews };
