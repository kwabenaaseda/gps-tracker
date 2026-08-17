// index.ts
import { Router } from "express";
import locationRoutes from "./location.routes";

const router = Router();
router.use(locationRoutes);
export default router;