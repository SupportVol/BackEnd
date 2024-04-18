import { Router } from "express";
import membershipInitiateObjects from "../../middlewares/organization/membershipInitiateObjects.js";
import {
  approveMembershipRequest,
  declineMembershipRequest,
  getMembershipRequests,
} from "../../handlers/organizations/MembershipRequestHandlers.js";

const membershipRouter = Router();

membershipRouter.use(membershipInitiateObjects);
membershipRouter
  .route("/")
  .get(getMembershipRequests)
  .post(approveMembershipRequest)
  .put(declineMembershipRequest);
export default membershipRouter;
