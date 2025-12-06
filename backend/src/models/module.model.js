import pool from "../config/db.js";

export default class Module {
  static findAll() {
    return pool.query("SELECT * FROM modules ORDER BY id ASC");
  }
}
