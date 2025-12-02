import Permission from "../models/permission.model.js";

export const createPermission = async (req, res) => {
  try {
    const result = await Permission.create(req.body);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getPermissions = async (_, res) => {
  try {
    const result = await Permission.findAll();
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getPermission = async (req, res) => {
  try {
    const result = await Permission.findById(req.params.id);
    result.rowCount
      ? res.json(result.rows[0])
      : res.status(404).json({ message: "Permission not found" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updatePermission = async (req, res) => {
  try {
    const result = await Permission.update(req.params.id, req.body);
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deletePermission = async (req, res) => {
  try {
    await Permission.delete(req.params.id);
    res.json({ message: "Permission deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
