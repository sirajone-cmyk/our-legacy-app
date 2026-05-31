import { Router } from "express";
import { families, lessons, madrasahs, users } from "../data/seed.js";
import { requireAuth, requireRole } from "../middleware/auth.js";

export const adminRouter = Router();

adminRouter.use(requireAuth, requireRole(["ADMIN"]));

adminRouter.get("/overview", (_req, res) => {
  res.json({
    counts: {
      madrasahs: madrasahs.length,
      families: families.length,
      users: users.length,
      teachers: users.filter((user) => user.role === "TEACHER").length,
      lessons: lessons.length
    },
    madrasahs,
    recentLessons: lessons.slice(0, 5)
  });
});

adminRouter.get("/users", (_req, res) => {
  res.json({
    users: users.map(({ passwordHash: _passwordHash, ...safeUser }) => safeUser)
  });
});
