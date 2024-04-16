/**
 * Handles user signup.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
export const handleSignup = async (req, res) => {
  const returnedVal = await req.auth.createUser();
  res.json({ response: returnedVal });
};

/**
 * Handles user login.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
export const handleLogin = async (req, res) => {
  const returnedVal = await req.auth.loginUser();
  res.json({ response: returnedVal });
};
