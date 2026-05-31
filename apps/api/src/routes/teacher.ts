import { Router } from "express";
import { lessons, progressRecords, users } from "../data/seed.js";
import { AuthenticatedRequest, requireAuth, requireRole } from "../middleware/auth.js";

export const teacherRouter = Router();

teacherRouter.use(requireAuth, requireRole(["TEACHER", "ADMIN"]));

teacherRouter.get("/dashboard", (req: AuthenticatedRequest, res) => {
  const teacherLessons = lessons.filter((lesson) => lesson.teacherId === req.user?.id || req.user?.role === "ADMIN");
  const learners = users.filter((user) => user.role === "STUDENT" && user.madrasahId === req.user?.madrasahId);
  res.json({
    lessons: teacherLessons,
    learners: learners.map(({ passwordHash: _passwordHash, ...learner }) => learner),
    progress: progressRecords.filter((record) => learners.some((learner) => learner.id === record.userId))
  });
});
