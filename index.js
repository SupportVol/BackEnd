// import express from "express";
// import bodyParser from "body-parser";
// import dotenv from "dotenv";
// import PORT from "./config/app.js";
// import authRouter from "./routes/auth.js";
// import userDetailsRouter from "./routes/userDetails.js";
// import msgRouter from "./routes/chat/message.js";
// import grpRouter from "./routes/chat/group.js";
// import commRouter from "./routes/community/community.js";
// import qpRouter from "./routes/community/quick_projects/quick_project.js";
// import iRouter from "./routes/community/initiatives/initiative.js";
// import commentRouter from "./routes/comment.js";
// import projectRouter from "./routes/projects/project.js";
// import postRouter from "./routes/organizations/posts.js";
// import checkBanStatus from "./middlewares/admin/checkBanStatus.js";
// import banRouter from "./routes/admin/ban.js";

// const app = express();
// dotenv.config();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// /**
//  * A simple function that returns a greeting message.
//  * @param {Request} req - The HTTP request object.
//  * @param {Response} res - The HTTP response object.
//  */

// app.get("/test", (_, res) => {
//   res.send("Hello World!");
// });

// // Use routers
// app.use(checkBanStatus);
// app.use("/api/auth", authRouter);
// app.use("/api/usr", userDetailsRouter);
// app.use("/api/chat/msg", msgRouter);
// app.use("/api/chat/grp", grpRouter);
// app.use("/api/community", commRouter);
// app.use("/api/events/quickproject", qpRouter);
// app.use("/api/events/initiative", iRouter);
// app.use("/api/comments/", commentRouter);
// app.use("/api/prj", projectRouter);
// app.use("/api/posts", postRouter);
// app.use("/api/ban", banRouter);
// /**
//  * Error handling middleware.
//  * @param {Error} err - The error object.
//  * @param {IncomingMessage} req - The HTTP request object.
//  * @param {ServerResponse} res - The HTTP response object.
//  * @param {any} next - The next middleware function in the stack.
//  */
// app.use((err, _, res, __) => {
//   console.error(err.stack);
//   res.status(500).send("Something broke!");
// });

// // Start the server
// const server = app.listen(PORT, () => {
//   const host = server.address().address;
//   const port = server.address().port;
//   console.log(`App listening at http://${host}:${port}`);
// });
import test from "config/firebase.js";

import express from "express";
<<<<<<< HEAD
=======
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
import postRouter from "./routes/organizations/posts.js";
import checkBanStatus from "./middlewares/admin/checkBanStatus.js";
import banRouter from "./routes/admin/ban.js";
import newsRouter from "./routes/admin/news.js";

>>>>>>> 8f857ff (Add News Articles Section)
const app = express();
const firebase = require("./services/firebase.js");

app.get("/", function (req, res) {
  res.send("Hello World!");
});

<<<<<<< HEAD
app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
  firebase.init();
});
=======
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
app.use("/api/news", newsRouter);
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
>>>>>>> 8f857ff (Add News Articles Section)
