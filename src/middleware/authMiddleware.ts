import { NextFunction, Request, RequestHandler, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET || "";
export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): any => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(403).json({ error: "Access denied" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: number };
    req.body.userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(498).json({ error: "Invalid token" });
  }
};
