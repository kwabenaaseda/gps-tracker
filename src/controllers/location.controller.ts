import type { Request, Response } from "express";
import { handleIncomingLocation } from "../services/location.service";

export async function ingestLocation(req: Request, res: Response) {
  try {
    const point = await handleIncomingLocation(req.body);
    res.status(201).json(point);
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  }
}