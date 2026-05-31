import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { config } from "../config.js";
import { Role } from "../data/seed.js";
import { AuthUser, findUserById } from "../services/authService.js";

export type AuthenticatedRequest = Request & {
  user?: AuthUser;
};

export function requireAuth(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const header = req.headers.authorization;
  const token = header?.startsWith("Bearer ") ? header.slice(7) : null;

  if (!token) {
    res.status(401).json({ message: "Missing bearer token" });
    return;
  }

  try {
    const decoded = jwt.verify(token, config.jwtSecret) as { sub: string };
    const user = findUserById(decoded.sub);
    if (!user) {
      res.status(401).json({ message: "User no longer exists" });
      return;
    }
    req.user = user;
    next();
  } catch {
    res.status(401).json({ message: "Invalid or expired token" });
  }
}

export function requireRole(roles: Role[]) {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (!req.user || !roles.includes(req.user.role)) {
      res.status(403).json({ message: "Insufficient permissions" });
      return;
    }
    next();
  };
}
