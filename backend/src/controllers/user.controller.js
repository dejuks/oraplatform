import { findAllUsers } from "../models/user.model.js";

// GET /api/users
export const getAllUsers = async (req, res) => {
  try {
    const users = await findAllUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
