import pool from "../config/db.js";

// GET /api/modules - public, no auth
export const getAllModules = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT id AS module_id, module_name, module_path FROM modules ORDER BY id DESC`
    );
    return res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error fetching modules:", error);
    return res.status(500).json({ message: "Server error" });
  }
};
