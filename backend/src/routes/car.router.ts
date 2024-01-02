import { getItem, postItem } from "controllers/car.controller";
import { Router } from "express";

export const router = Router();

router.post("/create", postItem);

router.get("/table", getItem);