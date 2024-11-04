import { Application, Router } from "express";
import { login, register } from "../controllers/authController";

const router = Router();

router.post("/register", register as Application);
router.post("/login", login as Application);

export default router;
