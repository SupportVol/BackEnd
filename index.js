import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import PORT from "./config/app.js";
import authRouter from "./routes/auth/AuthRoutes.js";
import msgRouter from "./routes/chat/MessageRoutes.js";
import grpRouter from "./routes/chat/GroupRoutes.js";
import commRouter from "./routes/community/CommunityRoutes.js";
import iRouter from "./routes/community/initiatives/InitiativeRoutes.js";
import commentRouter from "./routes/comment/CommentRoutes.js";
import postRouter from "./routes/organizations/postsRoutes.js";
import checkBanStatus from "./middlewares/admin/checkBanStatus.js";
import banRouter from "./routes/admin/BanRoutes.js";
import NewsRouter from "./routes/admin/NewsRoutes.js";
import projectRouter from "./routes/community/projects/ProjectRoutes.js";
import phoneNumberRouter from "./routes/user/phoneNumber.js";
import extraDetailsRouter from "./routes/user/extraDetails.js";
import profilePictureRouter from "./routes/user/profilePicture.js";
import extractUidAndVerification from "./middlewares/extractUidAndVerification.js";
import trainRouter from "./routes/training/trainingRoutes.js";
import phoneAuthRouter from "./routes/auth/PhoneAuthRoutes.js";
import teamMemberRouter from "./routes/organizations/teamMemberRouter.js";
import apiKeyVerification from "./middlewares/apiKeyVertification.js";
import apiKeyRouter from "./routes/admin/ApiKeyRoutes.js";
import membershipRouter from "./routes/organizations/memebershipRequestRouter.js";



const app = express();

app.use(
  cors({
    origin:"*",
  })
);


dotenv.config();
app.use(bodyParser.json());

app.get("/", (_, res) => {
  res.send("Hello World!");
});
app.get("/test", (_, res) => {
  res.send("This is testing update :)");
});
// Use routers
// app.use(createResponse);
app.use("/api/auth", authRouter);
app.use(extractUidAndVerification, checkBanStatus); // apiKeyVerification
app.use("/api/chat/msg", msgRouter);
app.use("/api/chat/grp", grpRouter);
app.use("/api/community", commRouter);
app.use("/api/events/initiative", iRouter);
app.use("/api/comments/", commentRouter);
app.use("/api/prj", projectRouter);
app.use("/api/posts", postRouter);
app.use("/api/ban", banRouter);
app.use("/api/news", NewsRouter);
app.use("/api/usr/phonenumber", phoneNumberRouter);
app.use("/api/usr/extradetails", extraDetailsRouter);
app.use("/api/usr/photo", profilePictureRouter);
app.use("/api/training", trainRouter);
app.use("/api/auth", phoneAuthRouter);
app.use("/api/org/teamMember", teamMemberRouter);
app.use("/api/keys", apiKeyRouter);
app.use("/api/organizations/requests", membershipRouter);
app.use((err, _, res, __) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

// Start the server
const server = app.listen(PORT, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`App listening at http://${host}:${port}`);
});
