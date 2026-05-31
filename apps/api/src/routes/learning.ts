import { Router } from "express";
import { z } from "zod";
import { lessons, progressRecords, talimEntries } from "../data/seed.js";
import { AuthenticatedRequest, requireAuth } from "../middleware/auth.js";

export const learningRouter = Router();

learningRouter.get("/talim/today", requireAuth, (_req, res) => {
  res.json({ talim: talimEntries[0] });
});

learningRouter.get("/lessons", requireAuth, (_req, res) => {
  res.json({ lessons });
});

learningRouter.get("/progress", requireAuth, (req: AuthenticatedRequest, res) => {
  res.json({ progress: progressRecords.filter((record) => record.userId === req.user?.id) });
});

learningRouter.post("/progress", requireAuth, (req: AuthenticatedRequest, res) => {
  const schema = z.object({
    lessonId: z.string(),
    percent: z.number().min(0).max(100),
    quizScore: z.number().min(0).max(100).optional()
  });
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ message: "Invalid progress payload", issues: parsed.error.flatten() });
    return;
  }

  const existing = progressRecords.find(
    (record) => record.userId === req.user?.id && record.lessonId === parsed.data.lessonId
  );
  const payload = {
    ...parsed.data,
    completed: parsed.data.percent >= 100 || parsed.data.quizScore === 100,
    updatedAt: new Date().toISOString()
  };

  if (existing) {
    Object.assign(existing, payload);
    res.json({ progress: existing });
    return;
  }

  const created = {
    id: `prog_${progressRecords.length + 1}`,
    userId: req.user?.id ?? "",
    ...payload
  };
  progressRecords.push(created);
  res.status(201).json({ progress: created });
});
