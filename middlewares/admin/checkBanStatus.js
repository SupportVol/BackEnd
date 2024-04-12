import Ban from "../../models/admin/ban.js";

// Example of handling banned users in a middleware function
const checkBanStatus = async (req, res, next) => {
  const uid = req.user.uid; // Assuming user ID is available in request
  const ban = new Ban();
  const banned = await ban.isUserBanned(uid);
  if (banned) {
    return res.status(403).send("You are banned from accessing this resource.");
  }
  next();
};
export default checkBanStatus;
