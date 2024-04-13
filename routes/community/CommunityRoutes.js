import extractUidAndVerification from "../../middlewares/extractUidAndVerification.js";
import projectInitiateObjects from "../../middlewares/community/projectInitiateObjects.js";
import { Router } from "express";
import {
  readCommunity,
  createCommunity,
  updateCommunity,
  deleteCommunity,
} from "../../handlers/community/CommunityHandlers.js";
/**
 * This class extends the BaseRouter to handle community related routes.
 * It uses middleware to extract user id and verification status, and to initiate project objects.
 * It defines routes for reading, creating, updating, and deleting communities.
 * @class commRouter
 * @extends {BaseRouter}
 */
const commRouter = Router();
commRouter.use(extractUidAndVerification, projectInitiateObjects);

// Define route for reading communities
commRouter.get("/", readCommunity);

// Define route for creating communities
commRouter.post("/", createCommunity);

// Define route for updating communities
commRouter.put("/", updateCommunity);

// Define route for deleting communities
commRouter.delete("/", deleteCommunity);
// Export the commRouter class as a module
export default commRouter;
