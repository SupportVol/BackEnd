import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import PORT from "./config/app.js";
import authRouter from "./routes/auth.js";
import userDetailsRouter from "./routes/userDetails.js";
import msgRouter from "./routes/chat/message.js";
import grpRouter from "./routes/chat/group.js";
import commRouter from "./routes/community/community.js";
import qpRouter from "./routes/community/quick_projects/quick_project.js";
import iRouter from "./routes/community/initiatives/initiative.js";
import commentRouter from "./routes/comment.js";
import projectRouter from "./routes/projects/project.js";
import postRouter from "./routes/organizations/posts.js"

const app = express();
dotenv.config();
app.use(bodyParser.json());
/**
 * A simple function that returns a greeting message.
 * @param {Request} req - The HTTP request object.
 * @param {Response} res - The HTTP response object.
 */

app.get("/test", (_, res) => {
  res.send("Hello World!");
});

// Use routers
app.use(checkBanStatus);
app.use("/api/auth", authRouter);
app.use("/api/usr", userDetailsRouter);
app.use("/api/chat/msg", msgRouter);
app.use("/api/chat/grp", grpRouter);
app.use("/api/community", commRouter);
app.use("/api/events/quickproject", qpRouter);
app.use("/api/events/initiative", iRouter);
app.use("/api/comments/", commentRouter);
app.use("/api/prj", projectRouter);
app.use("/api/posts", postRouter);
app.use("/api/ban", banRouter);
/**
 * Error handling middleware.
 * @param {Error} err - The error object.
 * @param {IncomingMessage} req - The HTTP request object.
 * @param {ServerResponse} res - The HTTP response object.
 * @param {any} next - The next middleware function in the stack.
 */
app.use((err, _, res, __) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start the server
const server = app.listen(PORT, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`App listening at http://${host}:${port}`);
});
