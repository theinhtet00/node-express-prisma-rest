import { Router } from "express";
import multer from "multer";
import { uploadImage } from "../controllers/imageController";

const router = Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post("/upload", upload.single("image"), uploadImage);

export default router;
