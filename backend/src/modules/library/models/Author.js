import db from "../../../config/db.js";

// CREATE
export const createAuthor = async (data) => {
  const query = `
    INSERT INTO authors
    (author_id, first_name, last_name, biography, nationality, date_of_birth, website,
     email, phone, affiliation, social_links, status, profile_picture)
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)
    RETURNING *;
  `;

  const values = [
    data.author_id,
    data.first_name,
    data.last_name,
    data.biography,
    data.nationality,
    data.date_of_birth,
    data.website,
    data.email,
    data.phone,
    data.affiliation,
    data.social_links ? JSON.stringify(data.social_links) : null,  // JSON
    data.status,
    data.profile_picture || null
  ];

  const result = await db.query(query, values);
  return result.rows[0];
};

// READ ALL
export const getAllAuthors = async () => {
  const result = await db.query("SELECT * FROM authors ORDER BY first_name ASC");
  return result.rows;
};

// READ ONE
export const getAuthorById = async (id) => {
  const result = await db.query("SELECT * FROM authors WHERE author_id=$1", [id]);
  return result.rows[0];
};

// UPDATE
export const updateAuthor = async (id, data) => {
  const query = `
    UPDATE authors SET
      first_name=$1,
      last_name=$2,
      biography=$3,
      nationality=$4,
      date_of_birth=$5,
      website=$6,
      email=$7,
      phone=$8,
      affiliation=$9,
      social_links=$10,
      status=$11,
      profile_picture=$12
    WHERE author_id=$13
    RETURNING *;
  `;

  const values = [
    data.first_name,
    data.last_name,
    data.biography,
    data.nationality,
    data.date_of_birth,
    data.website,
    data.email,
    data.phone,
    data.affiliation,
    data.social_links ? JSON.stringify(data.social_links) : null,
    data.status,
    data.profile_picture || null,
    id
  ];

  const result = await db.query(query, values);
  return result.rows[0];
};

// DELETE
export const deleteAuthor = async (id) => {
  await db.query("DELETE FROM authors WHERE author_id=$1", [id]);
  return true;
};
