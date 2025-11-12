import { Router } from "express";

const router = Router();

router.get("/trend", (req, res) => {
  res.send("esta rodando né!");
});

export default router;
