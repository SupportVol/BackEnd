/**
 * Handles user signup.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
export const handleSignup = async (req, res) => {
  const [response, uid] = await req.auth.createUser();
  res.json({ status: response ? 200 : 500, uid: uid });
};

/**
 * Handles user login.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
export const handleLogin = (req, res) => {
  const [response, uid] = req.auth.loginUser();
  res.json({ status: response ? 200 : 500, uid: uid });
};
