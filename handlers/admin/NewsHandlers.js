/**
 * Retrieves news data and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with news data.
 */
const getNews = (req, res) => {
  const { response, newsInitialization } = req;
  return response.respondJSON(newsInitialization.read);
};

/**
 * Creates news and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with news creation status.
 */
const createNews = (req, res) => {
  const { response, newsInitialization } = req;
  return response.respondJSON(newsInitialization.create);
};

/**
 * Updates news and sends a status response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - Response status.
 */
const updateNews = (req, res) => {
  const { response, newsInitialization } = req;
  return response.respondStatus(newsInitialization.update);
};

/**
 * Deletes news and sends a status response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - Response status.
 */
const deleteNews = (req, res) => {
  const { response, newsInitialization } = req;
  return response.respondStatus(newsInitialization.delete);
};

export { getNews, createNews, updateNews, deleteNews };
