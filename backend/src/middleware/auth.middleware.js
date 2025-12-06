import jwt from "jsonwebtoken";

export const authGuard = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(401).json({ error: "No token provided" });
  }

  const token = authHeader.split(" ")[1]; // Bearer TOKEN

  if (!token) {
    return res.status(401).json({ error: "Invalid token format" });
  }

  jwt.verify(token, process.env.JWT_SECRET || "SECRET_KEY", (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: "Unauthorized" });
    }

    req.user = decoded;
    next();
  });
};
