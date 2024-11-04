import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const createProduct = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { name, price } = req.body;
    const userId = req.body.userId;

    const product = await prisma.product.create({
      data: {
        name,
        price,
        userId,
      },
    });
    return res.status(201).json({ product });
  } catch (error) {
    return res.status(500).json({ error: "Product creation failed" });
  }
};

export const getProducts = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const products = await prisma.product.findMany({
      where: { userId: req.body.userId },
    });

    return res.status(200).json({ products });
  } catch (error) {
    return res.status(500).json({ error: "Error fetching products" });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = req.body.userId;
    const product = await prisma.product.findUnique({
      where: { id: parseInt(id), userId },
    });
    if (!product) return res.status(404).json({ error: "Product not found" });

    return res.status(200).json({ product });
  } catch (error) {
    return res.status(500).json({ error: "Error fetching product" });
  }
};

export const updateProduct = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = req.params;
    const { name, price } = req.body;
    const userId = req.body.userId;
    const product = await prisma.product.updateMany({
      where: { id: parseInt(id), userId },
      data: { name, price },
    });
    if (product.count === 0)
      return res
        .status(404)
        .json({ error: "product not found or not authorized" });
    return res.status(200).json({ message: "Product updated successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Error updating product" });
  }
};

export const deleteProduct = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = req.params;
    const userId = req.body.userId;
    const product = await prisma.product.deleteMany({
      where: { id: parseInt(id), userId },
    });
    if (product.count === 0)
      return res
        .status(404)
        .json({ error: "Product not found or not authorized" });
    return res.status(200).json({ message: "Delete product successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Error Deleting product" });
  }
};
