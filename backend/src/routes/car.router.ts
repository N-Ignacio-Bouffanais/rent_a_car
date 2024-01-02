import { Router, Request, Response, json } from "express";

export const router = Router();

router.get("/", (req:Request,res:Response)=>{
  res.send("Hello")
})