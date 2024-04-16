import TeamMemberModel from "../../models/organization/TeamMemberModel";
import isAuthorized from "../../utils/validation/isAuthorized";

const teamMemberInitiateObjects = (req, res, next) => {
  const response = isAuthorized(req.uid, ["Organization"], [0], req);
  if (Array.isArray(response)) {
    res.json({ response: response });
  }
  const { email, password, memberUID } = req.body;
  req.teamMemberInstance = new TeamMemberModel(email, password, memberUID);
  next();
};
export default teamMemberInitiateObjects;
