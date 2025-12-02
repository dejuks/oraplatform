import express from "express";
import { getAllUsers } from "../controllers/user.controller.js";
import { authGuard } from "../middleware/auth.middleware.js";

const router = express.Router();

// Protect this route so only authenticated users can see the list
router.get("/", authGuard, getAllUsers);

export default router;
