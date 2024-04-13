// Importing necessary modules
import { Router } from "express";
import extractUidAndVerification from "../../middlewares/extractUidAndVerification.js";
import postInitiateObjects from "../../middlewares/organization/postInitiateObjects.js";
import {
  readPost,
  createPost,
  updatePost,
  deletePost,
} from "../../handlers/organizations/PostsHandlers.js";

const postRouter = Router();
// Use middleware for extracting UID and verification, and initiating post objects
postRouter.use(extractUidAndVerification, postInitiateObjects);

// Route for reading a post
postRouter.get("/", readPost);

// Route for creating a post
postRouter.post("/", createPost);

// Route for updating a post
postRouter.put("/", updatePost);

// Route for deleting a post
postRouter.delete("/", deletePost);
// Exporting postRouter class as default
export default postRouter;
