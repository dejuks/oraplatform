import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "ora_platform",
  password: "9090",
  port: 5432
});

export default pool;
