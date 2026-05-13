import express from "express";
import { chatbot, teachBot } from "../controllers/chatContoller.js";

const router = express.Router();

router.post("/chat", chatbot);
router.post("/teach", teachBot);

export default router;  