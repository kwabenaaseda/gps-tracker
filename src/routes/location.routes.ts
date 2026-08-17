// location.routes.ts
import { Router } from "express";
import { ingestLocation } from "../controllers/location.controller";

const router = Router();
router.post("/locations", ingestLocation);
export default router;