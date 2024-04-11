import { Router } from "express";
import extractUidAndVerification from "../middlewares/extractUidAndVerification.js";
import Comment from "../models/comment.js";
import specificCommentInitiateObjects from "../middlewares/comment/specificCommentInitiateObjects.js";

const commentRouter = Router();

commentRouter.route("/").post(extractUidAndVerification, async (req, res) => {
  try {
    const { senderuid, commentTxt } = req.body;
    const { id } = req.params; // Assuming you have a route parameter for the event ID
    const comment = new Comment(id);
    const [success, docID] = await comment.createComment(senderuid, commentTxt);
    res.json({ status: success ? 200 : 500, docID });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

commentRouter
  .route("/:commentID")
  .get(
    extractUidAndVerification,
    specificCommentInitiateObjects,
    async (req, res) => {
      try {
        const [success, commentData] =
          await req.commentInitialization.readComment();
        res.json({ status: success ? 200 : 404, comment: commentData });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    }
  )
  .put(
    extractUidAndVerification,
    specificCommentInitiateObjects,
    async (req, res) => {
      try {
        const { commentTxt, senderuid } = req.body;
        const [success] = await req.commentInitialization.updateComment(
          commentTxt,
          senderuid
        );
        res.json({ status: success ? 200 : 404 });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    }
  )
  .delete(
    extractUidAndVerification,
    specificCommentInitiateObjects,
    async (req, res) => {
      try {
        const [success] = await req.commentInitialization.deleteComment();
        res.json({ status: success ? 200 : 404 });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    }
  );

export default commentRouter;
