import pool from "../config/db.js";

export const DepartmentModel = {
  findAll: () => pool.query("SELECT * FROM departments ORDER BY id DESC"),
  findById: (id) => pool.query("SELECT * FROM departments WHERE id=$1", [id]),
  create: ({ name, description }) =>
    pool.query(
      "INSERT INTO departments (name, description) VALUES ($1, $2) RETURNING *",
      [name, description]
    ),
  update: (id, { name, description }) =>
    pool.query(
      "UPDATE departments SET name=$1, description=$2, updated_at=now() WHERE id=$3 RETURNING *",
      [name, description, id]
    ),
  delete: (id) => pool.query("DELETE FROM departments WHERE id=$1", [id]),
};
