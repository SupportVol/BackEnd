import Ban from "../../models/admin/ban";

const banInitiateObjects = (req, res, next) => {
  const ban = new Ban(req.uid);
  req.ban = ban;
  next();
};
export default banInitiateObjects;
