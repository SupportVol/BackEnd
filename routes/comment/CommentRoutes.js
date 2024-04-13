// Importing necessary modules
import extractUidAndVerification from "../../middlewares/extractUidAndVerification.js";
import specificCommentInitiateObjects from "../../middlewares/comment/specificCommentInitiateObjects.js";
import BaseRouter from "../utils/baseRouter.js";
import { createComment, getComment, updateComment, deleteComment } from "../../handlers/comment/CommentHandlers.js";

// commentRouter class extends BaseRouter
class commentRouter extends BaseRouter {
  // Method to initialize routes
  initializeRoutes() {
    // Middleware to extract UID and Verification
    this.use(extractUidAndVerification, specificCommentInitiateObjects);

    // Route to create a comment
    this.post("/", createComment);

    // Route to get, update, and delete a specific comment
    this.route("/:commentID")
      .get(getComment) // Get a specific comment
      .put(updateComment) // Update a specific comment
      .delete(deleteComment); // Delete a specific comment
  }
}

// Exporting commentRouter
export default commentRouter;
