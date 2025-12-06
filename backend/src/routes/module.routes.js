import express from "express";
import { getAllModules } from "../controllers/module.controller.js";
// import { authGuard } from "../middleware/auth.middleware.js";

const router = express.Router();

// Example: GET /api/modules
router.get("/", getAllModules);

export default router;
