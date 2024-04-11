import { Router } from "express";

const banRouter = Router();

banRouter
  .route("/")
  .get((req, res) => {
    const banned = req.ban.isUserBanned();
    res.status(200).json({ banned: banned });
  })
  .post((req, res) => {
    const banned = req.ban.banUser();
    res
      .status(200)
      .send(`Banned User with Uid : ${req.uid}`)
      .json({ response: banned });
  })
  .put((req, res) => {
    const unbanned = req.ban.banUser();
    res
      .status(200)
      .send(`UnBanned User with Uid : ${req.uid}`)
      .json({ response: unbanned });
  });

export default banRouter;
