import { createUser, findAllUsers } from "../models/user.model.js";
import bcrypt from "bcryptjs";

// GET /api/users
export const getAllUsers = async (req, res) => {
  try {
    const users = await findAllUsers();
    return res.status(200).json({ success: true, count: users.length, users });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, error: "Server error" });
  }
};

// POST /api/users
export const createUserController = async (req, res) => {
  try {
    const data = req.body;
    if (!data.full_name || !data.email || !data.password) {
      return res.status(400).json({ error: "Full name, email, and password are required" });
    }

    // Hash password
    data.password = await bcrypt.hash(data.password, 10);

    const newUser = await createUser(data);
    return res.status(201).json({ success: true, user: newUser });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, error: "Server error" });
  }
};
