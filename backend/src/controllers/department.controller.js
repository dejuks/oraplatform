import { DepartmentModel } from "../models/department.model.js";

export const getDepartments = async (_, res) => {
  const data = await DepartmentModel.findAll();
  res.json(data.rows);
};

export const createDepartment = async (req, res) => {
  const { name, description } = req.body;
  const data = await DepartmentModel.create({ name, description });
  res.status(201).json(data.rows[0]);
};

export const updateDepartment = async (req, res) => {
  const { name, description } = req.body;
  const data = await DepartmentModel.update(req.params.id, { name, description });
  res.json(data.rows[0]);
};

export const deleteDepartment = async (req, res) => {
  await DepartmentModel.delete(req.params.id);
  res.json({ message: "Department deleted" });
};
