import cors from "cors";
import express from "express";
import helmet from "helmet";
import { config } from "./config.js";
import { adminRouter } from "./routes/admin.js";
import { authRouter } from "./routes/auth.js";
import { learningRouter } from "./routes/learning.js";
import { teacherRouter } from "./routes/teacher.js";

const app = express();

app.use(helmet());
app.use(cors({ origin: config.webOrigin, credentials: true }));
app.use(express.json({ limit: "2mb" }));

app.get("/health", (_req, res) => {
  res.json({ ok: true, service: "our-legacy-api", environment: config.nodeEnv });
});

app.use("/api/auth", authRouter);
app.use("/api", learningRouter);
app.use("/api/admin", adminRouter);
app.use("/api/teacher", teacherRouter);

app.use((_req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(config.port, () => {
  console.log(`OUR LEGACY API listening on http://localhost:${config.port}`);
});
