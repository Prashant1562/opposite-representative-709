import { Router } from "express";
import { playCard } from "../controllers/gameController";
const router = Router();
router.post("/play", playCard);
export default router;
