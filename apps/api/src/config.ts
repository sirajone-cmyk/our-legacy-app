import "dotenv/config";

export const config = {
  nodeEnv: process.env.NODE_ENV ?? "development",
  port: Number(process.env.PORT ?? 4200),
  webOrigin: process.env.WEB_ORIGIN ?? "http://localhost:5173",
  jwtSecret: process.env.JWT_SECRET ?? "development-only-change-me",
  jwtExpiresIn: process.env.JWT_EXPIRES_IN ?? "7d"
};
