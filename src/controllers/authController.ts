import { Request, Response } from "express";
import {
  comparePassword,
  generateToken,
  hashPassword,
} from "../utils/authUtils";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const register = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await hashPassword(password);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    return res.json({
      message: "User registerd successfully",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "User registration failed",
    });
  }
};

export const login = async (req: Request, res: Response): Promise<Response> => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(404).json({ message: "Invalid Crendentials" });

    const isMatch = comparePassword(password, user.password);
    if (!isMatch)
      return res.status(404).json({ message: "Invalid Credentials" });

    const token = generateToken(user.id);
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(404).json({ message: "Login Failed" });
  }
};
