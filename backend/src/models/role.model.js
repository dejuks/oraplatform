import pool from "../config/db.js";

export const RoleModel = {
  findAll: () => pool.query("SELECT * FROM roles ORDER BY id DESC"),
  create: ({ name, description }) =>
    pool.query("INSERT INTO roles (name, description) VALUES ($1,$2) RETURNING *",
    [name, description]),
  delete: (id) => pool.query("DELETE FROM roles WHERE id=$1", [id]),
};
