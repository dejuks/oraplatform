// src/modules/library/routes/authorRoutes.js
import express from "express";
import multer from "multer";

import {
  createAuthorController,
  getAllAuthorsController,
  getAuthorByIdController,
  updateAuthorController,
  deleteAuthorController
} from "../controllers/authorController.js";

const router = express.Router();

// Configure multer storage
const storage = multer.diskStorage({
  destination: "./modules/library/uploads",
  filename: (req, file, cb) =>
    cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

// CRUD routes with file upload for POST and PUT
router.post("/", upload.single("profile_picture"), createAuthorController);
router.get("/", getAllAuthorsController);
router.get("/:id", getAuthorByIdController);
router.put("/:id", upload.single("profile_picture"), updateAuthorController);
router.delete("/:id", deleteAuthorController);

export default router;
