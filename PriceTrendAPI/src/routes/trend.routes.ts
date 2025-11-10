import { Router } from "express";

const router = Router();

router.get("/home", (req, res) => {
  res.send("home page");
});

export default { path: "/", router };
