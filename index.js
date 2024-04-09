import express from "express";
import PORT from "./config/app.js";
import authRouter from "./routes/auth.js";
import bodyParser from "body-parser";
import userDetailsRouter from "./routes/userDetails.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();
app.use(bodyParser.json());

app.get("/", (_, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

app.use("/api/auth/", authRouter);
app.use("/api/auth/", userDetailsRouter);
