// Importing necessary modules
import { Router } from 'express'
import extractUidAndVerification from "../../middlewares/extractUidAndVerification.js";
import specificCommentInitiateObjects from "../../middlewares/comment/specificCommentInitiateObjects.js";
import { createComment, getComment, updateComment, deleteComment } from "../../handlers/comment/CommentHandlers.js";

const commentRouter = Router()

commentRouter.use(extractUidAndVerification, specificCommentInitiateObjects);

// Route to get, update, and delete a specific comment
commentRouter.route("/")
  .get(getComment)
  .post(createComment) // Get a specific comment
  .put(updateComment) // Update a specific comment
  .delete(deleteComment); // Delete a specific comment

// Exporting commentRouter
export default commentRouter;
