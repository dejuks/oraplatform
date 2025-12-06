import pool from "../config/db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    // 1. Check if user exists
    const userQuery = await pool.query(
      "SELECT * FROM users WHERE email=$1 LIMIT 1",
      [email]
    );
    if (userQuery.rows.length === 0)
      return res.status(404).json({ message: "User not found" });

    const user = userQuery.rows[0];

    // 2. Validate password
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch)
      return res.status(401).json({ message: "Invalid password" });

    // 3. Get all user roles + modules
    const rolesQuery = await pool.query(
      `
      SELECT 
        r.id AS role_id,
        r.role_name AS role_name,
        m.id AS module_id,
        m.module_name,
        m.module_path
      FROM user_roles ur
      JOIN roles r ON ur.role_id = r.id
      JOIN modules m ON r.module_id = m.id
      WHERE ur.user_id = $1
      `,
      [user.id]
    );

    const roles = rolesQuery.rows;

    if (roles.length === 0)
      return res.status(403).json({ message: "User has no assigned roles." });

    // 4. Create JWT token
    const token = jwt.sign(
      {
        userId: user.id,
        roles: roles.map((r) => r.role_id),
        modules: roles.map((r) => r.module_id),
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // 5. Return user + modules (frontend will pick)
    return res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        full_name: user.full_name,
        email: user.email,
      },
      modules: roles.map((r) => ({
        module_id: r.module_id,
        module_name: r.module_name,
        module_path: r.module_path,
        role_id: r.role_id,
        role_name: r.role_name,
      })),
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
