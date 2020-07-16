import { Router } from "express";
import { FeedRouter } from "./feed/routes/feed.router";
import { UserRouter } from "./user/routes/user.router";


const router: Router = Router();

router.use("/feed", FeedRouter);
router.use("/user", UserRouter);

router.get("/", function (req, res) {
  res.send("V0");
});

export const IndexRoute: Router = router;