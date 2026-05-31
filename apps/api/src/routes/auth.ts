import { Router } from "express";
import { AuthenticatedRequest, requireAuth } from "../middleware/auth.js";
import { loginSchema, loginWithPassword } from "../services/authService.js";

export const authRouter = Router();

authRouter.post("/login", async (req, res) => {
  const parsed = loginSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ message: "Invalid login payload", issues: parsed.error.flatten() });
    return;
  }

  const result = await loginWithPassword(parsed.data.email, parsed.data.password);
  if (!result) {
    res.status(401).json({ message: "Invalid email or password" });
    return;
  }

  res.json(result);
});

authRouter.get("/me", requireAuth, (req: AuthenticatedRequest, res) => {
  res.json({ user: req.user });
});
