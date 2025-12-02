export const requireSuperUser = (req, res, next) => {
  if (!req.user.is_superuser)
    return res.status(403).json({ error: "Super Admin access required" });
  next();
};
