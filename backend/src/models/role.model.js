import pool from "../config/db.js";

// -----------------------------
// GET ROLES ASSIGNED TO A USER
// -----------------------------
export const getUserRoles = async (userId) => {
  const query = `
    SELECT 
      r.id AS role_id,
      r.name AS role_name,
      r.description,
      m.id AS module_id,
      m.module_name
    FROM user_roles ur
    JOIN roles r ON ur.role_id = r.id
    JOIN modules m ON r.module_id = m.id
    WHERE ur.user_id = $1
  `;

  const result = await pool.query(query, [userId]);
  return result.rows;  // returns list of user roles + module names
};

// -----------------------------
// ROLE MODEL CRUD
// -----------------------------
export const RoleModel = {
  // Fetch all roles with module info
  findAll: () =>
    pool.query(`
      SELECT r.*, m.module_name 
      FROM roles r
      LEFT JOIN modules m ON r.module_id = m.id
      ORDER BY r.id DESC
    `),

  // Create a role
  create: ({ name, description, module_id }) =>
    pool.query(
      `INSERT INTO roles (name, description, module_id)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [name, description, module_id]
    ),

  // Delete a role
  delete: (id) =>
    pool.query(`DELETE FROM roles WHERE id=$1`, [id]),

  // Get role by ID
  findById: (id) =>
    pool.query(`SELECT * FROM roles WHERE id=$1`, [id]),

  // Get all roles belonging to a module
  findByModule: (module_id) =>
    pool.query(
      `SELECT * FROM roles WHERE module_id = $1 ORDER BY id DESC`,
      [module_id]
    ),
};
