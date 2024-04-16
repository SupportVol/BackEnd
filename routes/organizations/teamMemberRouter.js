import { Router } from "express";
import {
  createTeamMember,
  deleteTeamMember,
  getTeamMember,
  updateTeamMember,
} from "../../handlers/organizations/TeamMemberHandlers.js";
import teamMemberInitiateObjects from "../../middlewares/organization/teamMemberInitiateObjects.js";

const teamMemberRouter = Router();

teamMemberRouter.use(teamMemberInitiateObjects);
teamMemberRouter
  .route("/")
  .get(getTeamMember)
  .post(createTeamMember)
  .put(updateTeamMember)
  .delete(deleteTeamMember);
export default teamMemberRouter;
