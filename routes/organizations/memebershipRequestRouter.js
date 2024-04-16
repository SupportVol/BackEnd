import { Router } from "express";
import membershipInitiateObjects from "../../middlewares/organization/membershipInitiateObjects";
import {
  approveMembershipRequest,
  declineMembershipRequest,
  getMembershipRequests,
} from "../../handlers/organizations/MembershipRequestHandlers";

const membershipRouter = Router();

membershipRouter.use(membershipInitiateObjects);
membershipRouter
  .route("/")
  .get(getMembershipRequests)
  .post(approveMembershipRequest)
  .put(declineMembershipRequest);
