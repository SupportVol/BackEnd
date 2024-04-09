const extractUidAndVerification = (req, res, next) => {
  req.uid = req.headers.uid;
  if (!req.uid) {
    return res.status(400).json({ error: "UID is missing in headers" });
  }
  next();
};
export default extractUidAndVerification;
