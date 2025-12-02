import pool from "../config/db.js";

// Find a user by email
export const findUserByEmail = async (email) => {
  const result = await pool.query(`SELECT * FROM users WHERE email=$1`, [email]);
  return result.rows[0];
};

// Find a user by ID
export const findUserById = async (id) => {
  const result = await pool.query(`SELECT * FROM users WHERE id=$1`, [id]);
  return result.rows[0];
};

// Create a new user
export const createUser = async (data) => {
  const {
    full_name,
    email,
    password,
    phone_number,
    gender,
    job_title,
    organization,
    department_id,
    profile_photo,
    is_superuser,
  } = data;

  const query = `
    INSERT INTO users (
      full_name,email,password,phone_number,gender,
      job_title,organization,department_id,profile_photo,is_superuser
    ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *`;

  const values = [
    full_name,
    email,
    password,
    phone_number || null,
    gender || null,
    job_title || null,
    organization || null,
    department_id || null,
    profile_photo || null,
    is_superuser || false,
  ];

  const result = await pool.query(query, values);
  return result.rows[0];
};

// Update user
export const updateUser = async (id, data) => {
  const {
    full_name,
    email,
    phone_number,
    gender,
    job_title,
    organization,
    department_id,
    profile_photo,
    status,
    is_superuser,
  } = data;

  const query = `
    UPDATE users
    SET full_name=$1, email=$2, phone_number=$3, gender=$4,
        job_title=$5, organization=$6, department_id=$7,
        profile_photo=$8, status=$9, is_superuser=$10,
        updated_at=now()
    WHERE id=$11 RETURNING *`;

  const values = [
    full_name,
    email,
    phone_number,
    gender,
    job_title,
    organization,
    department_id,
    profile_photo,
    status,
    is_superuser,
    id,
  ];

  const result = await pool.query(query, values);
  return result.rows[0];
};

// Delete user
export const deleteUser = async (id) => {
  await pool.query(`DELETE FROM users WHERE id=$1`, [id]);
};

// Update last login timestamp
export const updateLastLogin = async (id) => {
  await pool.query(`UPDATE users SET last_login = now() WHERE id=$1`, [id]);
};

// Get all users
export const findAllUsers = async () => {
  const result = await pool.query(`SELECT * FROM users ORDER BY id DESC`);
  return result.rows;
};
