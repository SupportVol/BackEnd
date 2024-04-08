import express from "express";
import PORT from "./config/app.js";
import authRouter from "./routes/auth.js";
import pHRouter from "./routes/profile/phoneNumber.js";
import pfpRouter from "./routes/profile/pfp.js";
import bodyParser from "body-parser";

// import dotenv from 'dotenv'

// dotenv.config()

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

app.use("/api/auth/", authRouter);
app.use("/api/usr/pH", pHRouter);
app.use("/api/usr/pfp", pfpRouter);