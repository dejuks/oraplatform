import RolePermission from "../models/rolePermission.model.js";

export const assignPermissionToRole = async (req, res) => {
  try {
    const { role_id, permission_id } = req.body;
    const result = await RolePermission.assign(role_id, permission_id);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getRolePermissions = async (req, res) => {
  try {
    const result = await RolePermission.findByRole(req.params.roleId);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const removeRolePermission = async (req, res) => {
  try {
    await RolePermission.remove(req.params.id);
    res.json({ message: "Permission removed from role" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
