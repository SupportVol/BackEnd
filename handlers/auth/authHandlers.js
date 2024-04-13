/**
 * Handles user signup.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
export const handleSignup = async (req, res) => {
  const returnedVal = await req.auth.createUser();
  res.json({ value: returnedVal });
};

/**
 * Handles user login.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
export const handleLogin = (req, res) => {
  return req.response.respondJSON(req.auth.loginUser());
};
