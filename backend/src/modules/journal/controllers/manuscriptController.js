// src/modules/journal/controllers/manuscriptController.js
import * as Manuscript from "../models/Manuscript.js";
import dayjs from "dayjs";

export const createManuscriptController = async (req, res) => {
  try {
    const files = req.files;
    const submission_id = "MS-" + Date.now();

    const manuscript_file = files.manuscript_file[0].filename;
    const supplementary = files.supplementary_materials?.map(f => f.filename) || [];

    const reminders = [
      dayjs().add(3, "day").toDate(),
      dayjs().add(7, "day").toDate(),
      dayjs().add(14, "day").toDate()
    ];

    const data = {
      submission_id,
      title: req.body.title,
      abstract: req.body.abstract,
      reference_list: req.body.reference_list,
      cover_letter: req.body.cover_letter,
      manuscript_file,
      plagiarism_score: req.body.plagiarism_score ?? 0,
      author_id: req.body.author_id,
      journal_id: req.body.journal_id,
      assigned_editor_id: req.body.assigned_editor_id ?? null,
      keywords: req.body.keywords.split(","), // array
      supplementary_materials: supplementary,
      status: "Submitted",
      submission_date: new Date(),
      decision_date: new Date(),
      sla_reminder_dates: reminders
    };

    const manuscript = await Manuscript.createManuscript(data);
    res.json({ success: true, manuscript });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const getAllManuscriptsController = async (req, res) => {
  try {
    const data = await Manuscript.getAllManuscripts();
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};


export const getManuscriptByIdController = async (req, res) => {
  try {
    const manuscript = await Manuscript.getManuscriptById(req.params.id);
    res.json(manuscript);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const updateManuscriptController = async (req, res) => {
  try {
    const id = req.params.id;
    const files = req.files;

    const updateObj = {
      title: req.body.title,
      abstract: req.body.abstract,
      reference_list: req.body.reference_list,
      cover_letter: req.body.cover_letter,
      keywords: req.body.keywords?.split(","),
      plagiarism_score: req.body.plagiarism_score,
      assigned_editor_id: req.body.assigned_editor_id,
      status: req.body.status
    };

    if (files.manuscript_file)
      updateObj.manuscript_file = files.manuscript_file[0].filename;

    if (files.supplementary_materials)
      updateObj.supplementary_materials = files.supplementary_materials.map(f => f.filename);

    // Workflow logic
    if (req.body.status === "Under Review")
      updateObj.review_start_date = new Date();

    if (req.body.status === "Revision Requested")
      updateObj.revision_deadline = dayjs().add(10, "day").toDate();

    if (req.body.status === "Revision Submitted")
      updateObj.review_end_date = new Date();

    if (req.body.status === "Accepted")
      updateObj.decision_date = new Date();

    if (req.body.status === "Published")
      updateObj.publication_date = new Date();

    const updated = await Manuscript.updateManuscript(id, updateObj);
    res.json({ success: true, updated });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const deleteManuscriptController = async (req, res) => {
  try {
    await Manuscript.deleteManuscript(req.params.id);
    res.json({ success: true, message: "Deleted Successfully" });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
