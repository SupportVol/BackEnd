/**
 * Extracts UID from request body and performs verification.
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @param {function} next - The next middleware function.
 */
const extractUidAndVerification = (req, res, next) => {
  const { uid } = req.body;
  if (!uid) {
    return res.status(400).json({ error: "UID is missing in body" });
  }
  req.uid = uid;
  next();
};

export default extractUidAndVerification;
