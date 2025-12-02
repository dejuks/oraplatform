import { Router } from "express";
import {
  assignPermissionToRole,
  getRolePermissions,
  removeRolePermission
} from "../controllers/rolePermission.controller.js";
import { authGuard } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/", authGuard, assignPermissionToRole);
router.get("/:roleId", authGuard, getRolePermissions);
router.delete("/:id", authGuard, removeRolePermission);

export default router;
