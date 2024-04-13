/**
 * Handles user signup.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
export const handleSignup = async (req, res) => {
  return req.response.responseJSON(req, res, req.auth.createUser);
};

/**
 * Handles user login.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
export const handleLogin = (req, res) => {
  return req.response.responseJSON(req, res, req.auth.loginUser);
};
