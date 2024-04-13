/**
 * Middleware function to create a new response object and attach it to the request object.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
const createResponse = (req, res, next) => {
  // Create a new response object and attach it to the request object
  req.response = new Response(req, res);

  // Call the next middleware function
  next();
};

// Export the createResponse middleware function
export default createResponse;
