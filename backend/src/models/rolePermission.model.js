import pool from "../config/db.js";

export default class RolePermission {
  static async assign(roleId, permissionId) {
    const query = `
      INSERT INTO role_permissions (role_id, permission_id)
      VALUES ($1, $2) RETURNING *`;
    return pool.query(query, [roleId, permissionId]);
  }

  static async findByRole(roleId) {
    const query = `
      SELECT rp.id, p.name AS permission_name, p.description
      FROM role_permissions rp
      JOIN permissions p ON p.id = rp.permission_id
      WHERE rp.role_id=$1`;
    return pool.query(query, [roleId]);
  }

  static async remove(id) {
    return pool.query(`DELETE FROM role_permissions WHERE id=$1`, [id]);
  }
}
