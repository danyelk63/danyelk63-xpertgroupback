import { Router } from "express";
import { createUser, loginUser } from "../controllers/userController";

const router = Router();

const asyncHandler = (fn: any) => (req: any, res: any, next: any) =>
  Promise.resolve(fn(req, res, next)).catch(next);

router.post("/create", asyncHandler(createUser));
router.post("/login", asyncHandler(loginUser));

export default router;
