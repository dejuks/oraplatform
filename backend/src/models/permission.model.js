import pool from "../config/db.js";

export default class Permission {
  static async create(data) {
    const query = `INSERT INTO permissions (name, description) VALUES ($1, $2) RETURNING *`;
    return pool.query(query, [data.name, data.description]);
  }

  static async findAll() {
    return pool.query(`SELECT * FROM permissions ORDER BY id DESC`);
  }

  static async findById(id) {
    return pool.query(`SELECT * FROM permissions WHERE id=$1`, [id]);
  }

  static async update(id, data) {
    const query = `
      UPDATE permissions 
      SET name=$1, description=$2, updated_at=now() 
      WHERE id=$3 RETURNING *`;
    return pool.query(query, [data.name, data.description, id]);
  }

  static async delete(id) {
    return pool.query(`DELETE FROM permissions WHERE id=$1`, [id]);
  }
}
