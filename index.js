import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import PORT from "./config/app.js";
import authRouter from "./routes/auth.js";
import userDetailsRouter from "./routes/userDetails.js";
import msgRouter from "./routes/chat/message.js";
import commRouter from "./routes/community/community.js";
import qpRouter from "./routes/community/quick_projects/quick_project.js";
import iRouter from "./routes/community/initiatives/initiative.js";

const app = express();
dotenv.config();
app.use(bodyParser.json());

// Define routes
app.get("/test", (_, res) => {
  res.send("Hello World!");
});

// Use routers
app.use("/api/auth", authRouter);
app.use("/api/usr", userDetailsRouter);
app.use("/api/chat/msg", msgRouter);
app.use("/api/community", commRouter);
app.use("/api/events/quickproject", qpRouter);
app.use("/api/events/initiative", iRouter);
iRouter

// Error handling middleware
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
