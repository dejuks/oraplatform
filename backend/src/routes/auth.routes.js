import express from "express";
import { registerUser, loginUser, logoutUser } from "../controllers/auth.controller.js";
import { authGuard } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", authGuard, logoutUser);

export default router;
