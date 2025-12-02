import express from "express";
import { getRoles, createRole, deleteRole } from "../controllers/role.controller.js";
import { authGuard } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", authGuard, getRoles);
router.post("/", authGuard, createRole);
router.delete("/:id", authGuard, deleteRole);

export default router;
