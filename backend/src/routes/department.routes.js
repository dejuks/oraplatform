import express from "express";
import {
  getDepartments,
  createDepartment,
  updateDepartment,
  deleteDepartment,
} from "../controllers/department.controller.js";
import { authGuard } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", authGuard, getDepartments);
router.post("/", authGuard, createDepartment);
router.put("/:id", authGuard, updateDepartment);
router.delete("/:id", authGuard, deleteDepartment);

export default router;
