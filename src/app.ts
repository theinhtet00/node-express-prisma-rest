import express from "express";
import AuthRouter from "./routes/authRoutes";

const app = express();

app.use(express.json());

app.use("/api/auth", AuthRouter);

export default app;
