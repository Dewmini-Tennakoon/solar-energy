import "dotenv/config";
import express from "express";
import energyGenerationRecordRouter from "./api/energy-generation-record";
import { globalErrorHandler } from "./api/middlewares/global-error-handling-middleware";
import { loggerMiddleware } from "./api/middlewares/logger-middleware";
import solarUnitRouter from "./api/solar-unit";
import { connectDB } from "./infrastructure/db";
import cors from "cors";

const server = express();
server.use(express.json());
server.use(cors({origin: "http://localhost:5173"}));

server.use(loggerMiddleware);

server.use("/api/solar-units", solarUnitRouter);
server.use("/api/energy-generation-records", energyGenerationRecordRouter);

server.use(globalErrorHandler);

server.get("/", (_req, res) => {
  res.send("Backend is alive!");
});

connectDB();

const PORT = Number(process.env.PORT) || 8000;

server.listen(PORT, "0.0.0.0", () => {
  console.log(`🔥 Backend running on http://localhost:${PORT}`);
});

