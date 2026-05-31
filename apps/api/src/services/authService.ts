import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import type { SignOptions } from "jsonwebtoken";
import { z } from "zod";
import { config } from "../config.js";
import { Role, users } from "../data/seed.js";

export type AuthUser = {
  id: string;
  name: string;
  email: string;
  role: Role;
  madrasahId: string;
  familyId?: string;
};

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});

export function signToken(user: AuthUser) {
  const options: SignOptions = { expiresIn: config.jwtExpiresIn as SignOptions["expiresIn"] };
  return jwt.sign(
    {
      sub: user.id,
      role: user.role,
      madrasahId: user.madrasahId,
      familyId: user.familyId
    },
    config.jwtSecret,
    options
  );
}

export function toAuthUser(user: (typeof users)[number]): AuthUser {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    madrasahId: user.madrasahId,
    familyId: user.familyId
  };
}

export async function loginWithPassword(email: string, password: string) {
  const user = users.find((candidate) => candidate.email.toLowerCase() === email.toLowerCase());
  if (!user) return null;

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) return null;

  const authUser = toAuthUser(user);
  return {
    user: authUser,
    token: signToken(authUser)
  };
}

export function findUserById(id: string) {
  const user = users.find((candidate) => candidate.id === id);
  return user ? toAuthUser(user) : null;
}
