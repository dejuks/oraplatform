import { Router } from "express";
import { createUserController, getAllUsers } from "../controllers/user.controller.js";
import { authGuard } from "../middleware/auth.middleware.js";
// import { getAuthors } from "../modules/journal/routes/manuscriptRoutes.js";

const router = Router();

// GET all users
router.get("/", authGuard, getAllUsers);
// router.get("/authors", getAuthors);

// CREATE new user
router.post("/", authGuard, createUserController);

export default router;
