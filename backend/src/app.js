import express from "express";
import authRoutes from "./routes/auth.routes.js";  // import the router
import departmentRoutes from "./routes/department.routes.js";
import roleRoutes from "./routes/role.routes.js";
import permissionRoutes from "./routes/permission.routes.js";
import rolePermissionRoutes from "./routes/rolePermission.routes.js";
import userRoutes from "./routes/user.routes.js";

import moduleRoutes from "./routes/module.routes.js";
import cors from "cors"; // ✅ Import cors
const app = express();
app.use(cors({ origin: "http://localhost:3000" }));
// Middleware
app.use(express.json()); // for parsing JSON requests
app.use(express.urlencoded({ extended: true })); // for parsing URL-encoded requests

// Routes
app.use("/api/auth", authRoutes); // mount auth routes at /api/auth
// Logout
app.post("/logout", (req, res) => {
  // For JWT: frontend can just remove the token.
  // Optionally: add token to blacklist if you maintain one
  return res.status(200).json({ message: "Logged out successfully" });
});
app.use("/api/users", userRoutes);
// Health check route
app.get("/", (req, res) => {
  res.send("ORA Platform Backend is running!");
});

app.use("/api/departments", departmentRoutes);
app.use("/api/roles", roleRoutes);
app.use("/api/permissions", permissionRoutes);
app.use("/api/role-permissions", rolePermissionRoutes);

app.use("/api/modules", moduleRoutes); // <--- public, no auth
export default app; // export the Express app
