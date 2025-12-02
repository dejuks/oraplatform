import jwt from "jsonwebtoken";

const SECRET = "SUPER_SECRET_KEY";

export const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, email: user.email, is_superuser: user.is_superuser },
    SECRET,
    { expiresIn: "1d" }
  );
};

export const verifyToken = (token) => jwt.verify(token, SECRET);
