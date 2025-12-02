import * as AuthService from "../services/auth.service.js";

export const registerUser = async (req, res) => {
  try {
    const result = await AuthService.register(req.body);
    res.json(result);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const result = await AuthService.login(req.body);
    res.json(result);
  } catch (e) {
    res.status(401).json({ error: e.message });
  }
};

export const logoutUser = async (req, res) => {
  res.json({ message: "Logout successful" });
};
