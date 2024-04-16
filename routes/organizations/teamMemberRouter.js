import { Router } from "express";

teamMemberRouter = Router();

teamMemberRouter.use(teamMemberInitiateObjects);
teamMemberRouter
  .route("/")
  .get(getTeamMember)
  .post(createTeamMember)
  .put(updateTeamMember)
  .delete(deleteTeamMember);
export default teamMemberRouter;
