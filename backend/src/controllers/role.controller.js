 import { RoleModel } from "../models/role.model.js";

export const getRoles = async (_, res) => {
  const data = await RoleModel.findAll();
  res.json(data.rows);
};

export const createRole = async (req, res) => {
  const data = await RoleModel.create(req.body);
  res.status(201).json(data.rows[0]);
};

export const deleteRole = async (req, res) => {
  await RoleModel.delete(req.params.id);
  res.json({ message: "Role removed" });
};
