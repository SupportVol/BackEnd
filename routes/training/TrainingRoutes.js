import { Router } from "express";

const trainRouter = Router();

// trainRouter.use()
trainRouter.route("/").get().post().put().delete();

export default trainRouter;
