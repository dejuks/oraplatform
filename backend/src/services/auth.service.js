import bcrypt from "bcrypt";
import { findUserByEmail, createUser, updateLastLogin } from "../models/user.model.js";
import { generateToken } from "../utils/jwt.js";

export const register = async (data) => {
  const userExist = await findUserByEmail(data.email);
  if (userExist) throw new Error("Email already used");

  const hashed = await bcrypt.hash(data.password, 10);
  data.password = hashed;

  await createUser(data);
  return { message: "User registered successfully" };
};

export const login = async ({ email, password }) => {
  const user = await findUserByEmail(email);
  if (!user) throw new Error("Account not found");

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) throw new Error("Incorrect password");

  await updateLastLogin(user.id);

  const token = generateToken(user);
  return { token, user };
};
