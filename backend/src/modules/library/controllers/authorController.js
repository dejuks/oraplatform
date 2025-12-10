import * as Author from "../models/Author.js";
import { v4 as uuidv4 } from "uuid";



// Helper to safely parse JSON
const parseJSON = (value) => {
  if (!value) return null; // empty or undefined
  try {
    // If already an array, return it
    if (Array.isArray(value)) return value;
    // Parse comma-separated string from form
    if (typeof value === "string") {
      // Try JSON.parse, if fails, treat as comma-separated
      try {
        return JSON.parse(value);
      } catch {
        return value.split(",").map((s) => s.trim()).filter(Boolean);
      }
    }
    return value;
  } catch {
    return null;
  }
};
// Create Author
 
export const createAuthorController = async (req, res) => {
  try {
    const author_id = uuidv4();

    const data = {
      author_id,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      biography: req.body.biography || null,
      nationality: req.body.nationality || null,
      date_of_birth: req.body.date_of_birth || null,
      website: req.body.website || null,
      email: req.body.email || null,
      phone: req.body.phone || null,
      affiliation: req.body.affiliation || null,
      profile_picture: req.file ? `/modules/library/uploads/${req.file.filename}` : null,
      social_links: parseJSON(req.body.social_links),
      status: req.body.status || "active",
    };

    const author = await Author.createAuthor(data);
    res.json({ success: true, author });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
// Get all authors
export const getAllAuthorsController = async (req, res) => {
  try {
    const authors = await Author.getAllAuthors();
    res.json(authors);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

// Get author by ID
export const getAuthorByIdController = async (req, res) => {
  try {
    const author = await Author.getAuthorById(req.params.id);
    res.json(author);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

// Update author
export const updateAuthorController = async (req, res) => {
  try {
    const id = req.params.id;

    const updateObj = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      biography: req.body.biography || null,
      nationality: req.body.nationality || null,
      date_of_birth: req.body.date_of_birth || null,
      website: req.body.website || null,
      email: req.body.email || null,
      phone: req.body.phone || null,
      affiliation: req.body.affiliation || null,
      profile_picture: req.file
        ? `/modules/library/uploads/${req.file.filename}`
        : req.body.profile_picture || null,
      social_links: parseJSON(req.body.social_links),
      status: req.body.status || "active",
    };

    const updated = await Author.updateAuthor(id, updateObj);
    res.json({ success: true, updated });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

// Delete author
export const deleteAuthorController = async (req, res) => {
  try {
    await Author.deleteAuthor(req.params.id);
    res.json({ success: true, message: "Author deleted successfully" });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
