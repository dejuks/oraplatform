// src/modules/journal/models/Manuscript.js
import db from "../../../config/db.js"; // your PostgreSQL client instance

export const createManuscript = async (data) => {
  const query = `
    INSERT INTO manuscripts 
    (submission_id, title, abstract, reference_list, cover_letter, manuscript_file, plagiarism_score, author_id, journal_id, assigned_editor_id, keywords, supplementary_materials, status, submission_date, decision_date, sla_reminder_dates)
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16)
    RETURNING *;
  `;

  const values = [
    data.submission_id,
    data.title,
    data.abstract,
    data.reference_list,
    data.cover_letter,
    data.manuscript_file,
    data.plagiarism_score,
    data.author_id,
    data.journal_id,
    data.assigned_editor_id,
    JSON.stringify(data.keywords), // array stored as JSON
    JSON.stringify(data.supplementary_materials), // array stored as JSON
    data.status,
    data.submission_date,
    data.decision_date,
    JSON.stringify(data.sla_reminder_dates),
  ];

  const result = await db.query(query, values);
  return result.rows[0];
};

export const getAllManuscripts = async () => {
  const result = await db.query("SELECT * FROM manuscripts ORDER BY submission_date DESC");
  return result.rows;
};

export const getManuscriptById = async (id) => {
  const result = await db.query("SELECT * FROM manuscripts WHERE id=$1", [id]);
  return result.rows[0];
};

export const updateManuscript = async (id, data) => {
  const query = `
    UPDATE manuscripts SET
      title=$1,
      abstract=$2,
      reference_list=$3,
      cover_letter=$4,
      keywords=$5,
      plagiarism_score=$6,
      assigned_editor_id=$7,
      status=$8,
      manuscript_file=COALESCE($9, manuscript_file),
      supplementary_materials=COALESCE($10, supplementary_materials)
    WHERE id=$11
    RETURNING *;
  `;
  const values = [
    data.title,
    data.abstract,
    data.reference_list,
    data.cover_letter,
    JSON.stringify(data.keywords),
    data.plagiarism_score,
    data.assigned_editor_id,
    data.status,
    data.manuscript_file || null,
    data.supplementary_materials ? JSON.stringify(data.supplementary_materials) : null,
    id,
  ];

  const result = await db.query(query, values);
  return result.rows[0];
};

export const deleteManuscript = async (id) => {
  await db.query("DELETE FROM manuscripts WHERE id=$1", [id]);
  return true;
};
