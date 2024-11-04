import { Application, Router } from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from "../controllers/productController";

const router = Router();

router.get("/", authMiddleware, getProducts as Application);
router.get("/:id", authMiddleware, getProductById as Application);
router.post("/", authMiddleware, createProduct as Application);
router.put("/:id", authMiddleware, updateProduct as Application);
router.delete("/:id", authMiddleware, deleteProduct as Application);

export default router;
