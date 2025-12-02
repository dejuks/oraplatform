import { Router } from "express";
import {
  createPermission,
  getPermissions,
  getPermission,
  updatePermission,
  deletePermission
} from "../controllers/permission.controller.js";
import { authGuard } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/", authGuard, createPermission);
router.get("/", authGuard, getPermissions);
router.get("/:id", authGuard, getPermission);
router.put("/:id", authGuard, updatePermission);
router.delete("/:id", authGuard, deletePermission);

export default router;
