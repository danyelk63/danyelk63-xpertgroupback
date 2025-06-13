import { Router } from "express";
import { getAllBreeds, getAllNames, getBreed, getImagesByBreed } from "../controllers/catController";

const router = Router();

const asyncHandler = (fn: any) => (req: any, res: any, next: any) =>
  Promise.resolve(fn(req, res, next)).catch(next);

router.get("/breeds", asyncHandler(getAllBreeds));
router.get("/breed-names", asyncHandler(getAllNames));
router.get("/breeds/:id", asyncHandler(getBreed));
router.get("/images/:id", asyncHandler(getImagesByBreed));

export default router;
