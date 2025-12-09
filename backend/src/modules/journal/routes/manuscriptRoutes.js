import express from "express";
import multer from "multer";
import {
  createManuscriptController,
  getAllManuscriptsController,
  getManuscriptByIdController,
  updateManuscriptController,
  deleteManuscriptController
} from "../controllers/manuscriptController.js";

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
  destination: "./modules/journal/uploads",
  filename: (req, file, cb) =>
    cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

// Routes
router.post(
  "/",
  upload.fields([
    { name: "manuscript_file", maxCount: 1 },
    { name: "supplementary_materials", maxCount: 10 },
  ]),
  createManuscriptController
);

router.get("/", getAllManuscriptsController);
router.get("/:id", getManuscriptByIdController);

router.put(
  "/:id",
  upload.fields([
    { name: "manuscript_file", maxCount: 1 },
    { name: "supplementary_materials", maxCount: 10 },
  ]),
  updateManuscriptController
);

router.delete("/:id", deleteManuscriptController);

export default router;
