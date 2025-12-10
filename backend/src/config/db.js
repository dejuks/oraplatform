// src/db.js
import pkg from "pg";
const { Pool } = pkg;

// Configure your database connection
const pool = new Pool({
  user: "postgres",          // your DB user
  host: "localhost",         // your DB host
  database: "ora_platform",   // your DB name
  password: "123456A@",  // your DB password
  port: 1582,                // your DB port
});

// Export a query function for easy use
export default {
  query: (text, params) => pool.query(text, params),
};
